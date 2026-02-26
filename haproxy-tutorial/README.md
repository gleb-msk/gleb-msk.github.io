# HAProxy: практика за 15 минут

## Что делаем

- Установим HAProxy (или запустим в Docker).
- Настроим балансировку на два бэкенда (два простых веб-сервера).
- Добавим health check: упадёт один бэкенд — трафик пойдёт только на второй.
- Проверим через `curl`.

---

## 1. Запуск через Docker Compose (самый быстрый способ)

В папке есть `docker-compose.yml`: HAProxy + два бэкенда (nginx или простой http-сервер). Запуск:

```bash
cd haproxy-tutorial
docker compose up -d
```

Проверка:

```bash
# Несколько раз — запросы пойдут на разные бэкенды (round-robin)
curl http://localhost:8080/
```

Остановка:

```bash
docker compose down
```

---

## 2. Конфиг HAProxy: из чего состоит

Файл `haproxy.cfg` (упрощённо):

```
global
  log stdout format raw local0

defaults
  mode http
  timeout connect 5s
  timeout client  10s
  timeout server  10s

# Бэкенды: куда слать трафик
backend app_servers
  balance roundrobin
  option httpchk GET /
  http-check expect status 200
  server app1 app1:80 check
  server app2 app2:80 check

# Вход: куда приходит клиент
frontend main
  bind *:80
  default_backend app_servers
```

**Что важно:**

| Секция | Назначение |
|--------|------------|
| `frontend` | Слушает порт (например 80), принимает запросы, отправляет в `backend`. |
| `backend` | Список серверов (`server ... check`), алгоритм `balance roundrobin`. |
| `option httpchk GET /` | Health check: HAProxy раз в N секунд делает GET / к каждому серверу. |
| `http-check expect status 200` | Бэкенд считается живым, только если ответ 200. |
| `check` в `server` | Включить проверку для этого сервера. |

Если бэкенд не отвечает 200 — HAProxy перестаёт слать на него трафик и снова включает, когда тот начнёт отвечать.

---

## 3. Команды для управления (если HAProxy установлен в систему)

- **Проверить конфиг:**  
  `haproxy -c -f /etc/haproxy/haproxy.cfg`

- **Перезагрузить конфиг без даунтайма:**  
  `systemctl reload haproxy`  
  или через socket:  
  `echo "reload" | socat stdio /var/run/haproxy.sock`

- **Статистика (если включён `stats`):**  
  В браузере открыть `http://localhost:8404/stats` (логин/пароль из конфига).

---

## 4. Эксперимент: симуляция падения бэкенда

1. Запусти `docker compose up -d`.
2. Несколько раз: `curl http://localhost:8080/` — увидишь ответы то от app1, то от app2.
3. Останови один контейнер:  
   `docker compose stop app1`
4. Снова делай `curl http://localhost:8080/` — все запросы пойдут на app2, 5xx не будет.
5. Запусти обратно: `docker compose start app1` — round-robin снова на оба.

Так ты видишь, как health check убирает мёртвый бэкенд из пула.

---

## 5. Два HAProxy + keepalived (высокая доступность)

Чтобы не было единой точки отказа на входе, ставят два сервера с HAProxy и общий виртуальный IP (VIP):

- На обоих установлены HAProxy с одинаковым конфигом и keepalived.
- Keepalived поднимает VIP на одном из серверов (master).
- Если master падает, второй (backup) забирает VIP — трафик переключается без смены IP в DNS.

Разбор keepalived и VRRP — отдельная тема; для начала достаточно понимать схему: два HAProxy + один VIP + проверки здоровья.

---

## Полезные ссылки

- [Официальная документация](https://www.haproxy.org/)
- [Configuration Manual](https://www.haproxy.org/download/2.8/doc/configuration.txt) — описание всех директив.
