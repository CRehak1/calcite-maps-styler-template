define([], function() {
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "8a63712c19a8410082f3dc106118b7d1",
        "oauthappid": null,
        //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        //Example of a template specific property. If your template had several color schemes
        //you could define the default here and setup configuration settings to allow users to choose a different
        "title":"",
        "summary":"",
        "defaultPanel":"map",
        "enableSummary":true,
        "enableTitle":true,
        "enableLegendPanel": true,
        "enableMapPanel":true,
        "enableLayersPanel":true,
        "enableHomeButton": true,
        "enableLocateButton":true,
        "enableBasemapToggle": true,
        "enableAboutDialog":true,
        "showAboutOnLoad":false,
        "enableShareDialog":true,
        "enableBookmarks": true,
        "enableOverviewMap":true,
        "openOverviewMap":false,
        "defaultBasemap": "topo",
        "nextBasemap": "hybrid",
        "hideNotesLayerPopups":true,
        "enableInstagram":true,
        "instagramChecked":false,
        "enableFlickr":true,
        "flickrChecked":false,
        "flickrSearch":"",
        "enableTwitter":true,
        "twitterChecked":false,
        "twitterSearch":"",
        "enableWebcams":true,
        "webcamsChecked":false,
        "bitlyLogin": "esrimarketing",
        "bitlyKey": "R_52f84981da0e75b23aea2b3b20cbafbc",
        "twitterUrl": location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/search/tweets.json",
        "twitterSigninUrl": location.protocol + "//utility.arcgis.com/tproxy/signin",
        "flickr_key":"404ebea7d5bc27aa5251d1207620e99b",
        "webcams_key":"65939add1ebe8bc9cc4180763f5df2ca",
        "instagram_key":"288c36a1a42c49de9a2480a05d054619",
        //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "bingmapskey": "",
        //Defaults to arcgis.com. Set this value to your portal or organization host name.
        "sharinghost": location.protocol + "//" + "www.arcgis.com"
    };
    return defaults;
});