# TroubleShooting

## Killing a process on a port (Mac)

Sometimes when you leave your computer on, the ports get stuck even after killing firebase emulators

From: https://stackoverflow.com/a/18706913

```sh
> lsof -i tcp:8080
> kill -9 PID
```
