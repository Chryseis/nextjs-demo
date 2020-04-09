export const BROWSER =(userAgent)=>({
    iOS: userAgent.match(/Mac OS/),
    iPad: userAgent.indexOf('iPad') > -1,
    iPhone: userAgent.indexOf('iPhone') > -1,
    Android: userAgent.indexOf('Android') > -1 ||userAgent.indexOf('Linux') > -1,
    isClient: userAgent.indexOf('') > -1,
    isWinClient: userAgent.indexOf('WinClient') > -1,
    isWeChat: userAgent.toLowerCase().indexOf('micromessenger') !== -1
})

export function getQueryString(name, search) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let r = (search || window.location.search)
        .replace('/', '')
        .substr(1)
        .match(reg)
    let context = ''
    if (r !== null) context = r[2]

    return decodeURIComponent(context)
}