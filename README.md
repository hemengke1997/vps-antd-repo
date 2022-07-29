Bug reproduction.

```bash
git clone git@github.com:hemengke1997/vps-antd-repo
cd vps-antd-repo/
pnpm install
pnpm run dev
```

Same as single line (copy-paste me):

```shell
git clone git@github.com:hemengke1997/vps-antd-repo && cd vps-antd-repo/ && pnpm install && pnpm run start
```

Got to [localhost:3000](http://localhost:3000) and observe how slow the app starts.

On the following windows machine it takes ~40 seconds for the first start and ~30 seconds for subsequent starts.

```
System:
  OS: Windows 10 10.0.22000
  CPU: (16) x64 Intel(R) Core(TM) i7-10700F CPU @ 2.90GHz
  Memory: 4.97 GB / 23.78 GB
```
