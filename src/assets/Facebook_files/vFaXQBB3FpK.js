if (self.CavalryLogger) { CavalryLogger.start_js(["T1TSBlo"]); }

__d("GroupsCometLogGroupsTabVisitMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5025730720785150"}),null);
__d("GroupsCometLogGroupsTabVisitMutation.graphql",["GroupsCometLogGroupsTabVisitMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"bookmarkIDs"},c={defaultValue:null,kind:"LocalArgument",name:"hasBookmark"},d={defaultValue:null,kind:"LocalArgument",name:"hasTopTab"},e={defaultValue:null,kind:"LocalArgument",name:"input"},f=[{kind:"Variable",name:"data",variableName:"input"}],g={alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null},h=[{kind:"Variable",name:"bookmark_ids",variableName:"bookmarkIDs"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],i={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},j=[{kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"}],k={condition:"hasBookmark",kind:"Condition",passingValue:!0,selections:[{alias:"bookmark_unread_count",args:j,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'}]};j={alias:"bookmark_unread_count_string",args:j,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'};var l={condition:"hasTopTab",kind:"Condition",passingValue:!0,selections:[{alias:"tab_unread_count",args:[{kind:"Literal",name:"bookmark_render_location",value:"COMET_TOP_TAB"}],kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_TOP_TAB")'}]};return{fragment:{argumentDefinitions:[a,c,d,e],kind:"Fragment",metadata:null,name:"GroupsCometLogGroupsTabVisitMutation",selections:[{alias:null,args:f,concreteType:"ViewerGroupsTabLogVisitResponsePayload",kind:"LinkedField",name:"viewer_groups_tab_log_visit",plural:!1,selections:[g,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:h,concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[i],storageKey:null},k,j,l],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,a,d,c],kind:"Operation",name:"GroupsCometLogGroupsTabVisitMutation",selections:[{alias:null,args:f,concreteType:"ViewerGroupsTabLogVisitResponsePayload",kind:"LinkedField",name:"viewer_groups_tab_log_visit",plural:!1,selections:[g,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:h,concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i],storageKey:null},k,j,l,i],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("GroupsCometLogGroupsTabVisitMutation_facebookRelayOperation"),metadata:{},name:"GroupsCometLogGroupsTabVisitMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("GroupsCometLogGroupsTabVisitMutation",["CometHomepageBadgeCountClearingMutationHelper","CometRelay","GroupsCometLogGroupsTabVisitMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;c="2361831622";var i={bookmarkIDs:[c],hasBookmark:!0,hasTopTab:!0};function j(a){d("CometHomepageBadgeCountClearingMutationHelper").clearBadgeCount(babelHelpers["extends"]({},i,{store:a}))}var k=function(a){d("CometHomepageBadgeCountClearingMutationHelper").onCompleted(i.bookmarkIDs,a==null?void 0:(a=a.viewer_groups_tab_log_visit)==null?void 0:a.viewer)};function a(a,c,e){d("CometRelay").commitMutation(a,{mutation:h!==void 0?h:h=b("GroupsCometLogGroupsTabVisitMutation.graphql"),onCompleted:k,optimisticUpdater:j,updater:j,variables:babelHelpers["extends"]({},i,{input:{badge_entry_point:c,badge_number:e}})})}g["default"]=a}),98);
__d("PrivacyCheckupCometAdsSocialInteractionsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3227055973985587"}),null);