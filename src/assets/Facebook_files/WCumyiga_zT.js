if (self.CavalryLogger) { CavalryLogger.start_js(["q58Lvua"]); }

__d("PagesCometUnownedFeedContainerFeedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4142880182479336"}),null);
__d("PagesCometUnownedFeedContainerFeedQuery$Parameters",["PagesCometUnownedFeedContainerFeedQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PagesCometUnownedFeedContainerFeedQuery_facebookRelayOperation"),metadata:{},name:"PagesCometUnownedFeedContainerFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PagesCometUnownedSinglePageRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4611189915668740"}),null);
__d("PagesCometUnownedSinglePageRootQuery$Parameters",["PagesCometUnownedSinglePageRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PagesCometUnownedSinglePageRootQuery_facebookRelayOperation"),metadata:{},name:"PagesCometUnownedSinglePageRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometTopChartsCityQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4282592845109101"}),null);
__d("CometTopChartsCityQuery$Parameters",["CometTopChartsCityQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometTopChartsCityQuery_facebookRelayOperation"),metadata:{},name:"CometTopChartsCityQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildPagesUnownedSinglePageRoute.entrypoint",["JSResourceForInteraction","PagesCometUnownedSinglePageRootQuery$Parameters","WebPixelRatio","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("PagesCometUnownedSinglePageRoot.react").__setRef("buildPagesUnownedSinglePageRoute.entrypoint"),function(a){a=a.routeProps.pageID;a={parameters:b("PagesCometUnownedSinglePageRootQuery$Parameters"),variables:{pageID:a,scale:d("WebPixelRatio").get()}};return{singlePageRootQueryReference:a}});g["default"]=a}),98);
__d("PagesCometUnownedRoot.entrypoint",["CometPageCardsContainerQuery$Parameters","JSResourceForInteraction","PagesCometUnownedFeedContainerFeedQuery$Parameters","WebPixelRatio","buildPagesUnownedSinglePageRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildPagesUnownedSinglePageRoute.entrypoint")(c("JSResourceForInteraction")("PagesCometUnownedRoot.react").__setRef("PagesCometUnownedRoot.entrypoint"),function(a){a=a.routeProps;return{extraProps:{pageID:a.pageID},queries:{pageCardsContainerQueryReference:{parameters:c("CometPageCardsContainerQuery$Parameters"),variables:{location:"SECONDARY_COLUMN",pageID:a.pageID,scale:d("WebPixelRatio").get(),useDefaultActor:!1}},pageFeedQueryReference:{parameters:c("PagesCometUnownedFeedContainerFeedQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometSinglePageContentContainerFeedQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE_TIMELINE",feedbackSource:22,pageID:a.pageID,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"timeline",scale:d("WebPixelRatio").get(),useDefaultActor:!1}}}}});g["default"]=a}),98);
__d("CometTopChartsCity.entrypoint",["CometTopChartsCityQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a=new Date();var h=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1),i=new Date(a.getFullYear(),a.getMonth(),a.getDate()+2),j=new Date(a.getFullYear(),a.getMonth(),a.getDate()+7),k=new Date(a.getFullYear(),a.getMonth()+1,a.getDate());b={getPreloadProps:function(a){return{queries:{queryRef:{parameters:c("CometTopChartsCityQuery$Parameters"),variables:{args:{city_extended_info:!0,city_query:a.routeProps.id},pageId:a.routeProps.id,timestamp_day_after_next_day:Math.floor(i.getTime()/1e3),timestamp_next_day:Math.floor(h.getTime()/1e3),timestamp_next_month:Math.floor(k.getTime()/1e3),timestamp_next_week:Math.floor(j.getTime()/1e3)}}}}},root:c("JSResourceForInteraction")("CometTopChartsCity.react").__setRef("CometTopChartsCity.entrypoint")};g["default"]=b}),98);