function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
                //电脑端
                //加载css
                var linkNode = document.createElement("link");
                linkNode.setAttribute("rel","stylesheet");
                linkNode.setAttribute("type","text/css");
                linkNode.setAttribute("href","assets/css/style.css");
                document.head.appendChild(linkNode);
                //加载js
                var scriptNode = document.createElement("script");
                scriptNode.setAttribute("type", "text/javascript");
                scriptNode.setAttribute("src", "assets/js/pc-unishow.js");
                document.head.appendChild(scriptNode);
				var scriptNode1 = document.createElement("script");
				scriptNode1.setAttribute("type", "text/javascript");
				scriptNode1.setAttribute("src", "assets/js/canvas-nest.js");
				document.head.appendChild(scriptNode1);
        }else{
                //手机端
                //加载css
                var oMeta = document.createElement('meta');
                oMeta.name = 'viewport';
                oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no';
                document.getElementsByTagName('head')[0].appendChild(oMeta);
                var linkNode = document.createElement("link");
                linkNode.setAttribute("rel","stylesheet");
                linkNode.setAttribute("type","text/css");
                linkNode.setAttribute("href","");
                document.head.appendChild(linkNode);
                //加载js
                var scriptNode = document.createElement("script");
                scriptNode.setAttribute("type", "text/javascript");
                scriptNode.setAttribute("src", "");
                document.head.appendChild(scriptNode);
        }
}
 
browserRedirect();//调用判断当前访问页面是手机端还是移动端