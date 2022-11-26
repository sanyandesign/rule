function FindProxyForURL(url, host)
{
    if (isInNet(host, "192.168.110.0", "255.255.255.0"))
        return "DIRECT";

    return "SOCKS 192.168.110.2:1080";
}
