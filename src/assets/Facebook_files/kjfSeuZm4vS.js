if (self.CavalryLogger) { CavalryLogger.start_js(["upv3lju"]); }

__d("CometGamingVideoLiveViewerCountFetcherQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4384711118249187"}),null);
__d("CometGamingVideoLiveViewerCountFetcherQuery.graphql",["CometGamingVideoLiveViewerCountFetcherQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"broadcastIds"}],c=[{kind:"Variable",name:"ids",variableName:"broadcastIds"}],d={alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometGamingVideoLiveViewerCountFetcherQuery",selections:[{alias:null,args:c,concreteType:"VideoBroadcastMultifetchEdge",kind:"LinkedField",name:"multifetch__VideoBroadcast",plural:!0,selections:[{alias:null,args:null,concreteType:"VideoBroadcast",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[d,e],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometGamingVideoLiveViewerCountFetcherQuery",selections:[{alias:null,args:c,concreteType:"VideoBroadcastMultifetchEdge",kind:"LinkedField",name:"multifetch__VideoBroadcast",plural:!0,selections:[{alias:null,args:null,concreteType:"VideoBroadcast",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[d,e,f],storageKey:null},f],storageKey:null}],storageKey:null}]},params:{id:b("CometGamingVideoLiveViewerCountFetcherQuery_facebookRelayOperation"),metadata:{live:{config_id:"comet_gaming_live_viewer_count"}},name:"CometGamingVideoLiveViewerCountFetcherQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometTabMenuForPivotLinks.react",["CometMenu.react","CometMenuItemSelectable_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.menuItems;return h.jsx(c("CometMenu.react"),{size:"full",children:a.map(function(a,b){var d=a.disabled,e=a.image,f=a.label,g=a.linkProps,i=a.onHoverIn,j=a.onHoverOut,k=a.onPress,l=a.onPressIn;a=a.selected;e=(e==null?void 0:e.type)==="icon"?e.icon:null;return h.jsx(c("CometMenuItemSelectable_DEPRECATED.react"),{disabled:d,href:(d=g==null?void 0:g.url)!=null?d:void 0,icon:e,isSelected:(d=a)!=null?d:!1,onClick:k,onHoverIn:i,onHoverOut:j,onPressIn:l,primaryText:f!=null?f:"",role:"menuitemradio",routeTarget:g==null?void 0:g.routeTarget,target:g==null?void 0:g.target,testid:void 0},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamingVideoLiveViewerCountFetcher.react",["CometGamingVideoLiveViewerCountFetcherQuery.graphql","CometRelay"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=a.broadcastIds;d("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("CometGamingVideoLiveViewerCountFetcherQuery.graphql"),{broadcastIds:a},{fetchPolicy:"store-and-network"})}g["default"]=a}),98);