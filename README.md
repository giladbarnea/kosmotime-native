# Install Instructions
1. Clone [Nativefier](https://github.com/jiahaog/nativefier)
2. Get the latest Mozilla user agent string matching your OS from [here](https://www.whatismybrowser.com/guides/the-latest-user-agent/firefox) (even if you're not using Firefox). For example, as of writing this, the latest UA string relevant for me is `"Mozilla/5.0 (Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0"`.
3. Run nativefier with the following flags:
```bash
nativefier -u <USER AGENT STRING> --single-instance --internal-urls=".*$1.*|.*$1.*/.*|.*\.google\.com" --name kosmotime "https://app.kosmotime.com" <INSTALL PATH>
# '--internal-urls' is necessary to allow logging in.
# Additional flags I use are '--tray' to make it minimizable to tray, and '-i <PATH TO ICON.png>'
```
4. 
