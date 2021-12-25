if (self.CavalryLogger) { CavalryLogger.start_js(["rjumpHO"]); }

__d("useGroupHideSuggestionMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3460158610662767"}),null);
__d("useGroupHideSuggestionMutation.graphql",["useGroupHideSuggestionMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"GroupHideSuggestionResponsePayload",kind:"LinkedField",name:"group_hide_suggestion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useGroupHideSuggestionMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useGroupHideSuggestionMutation",selections:c},params:{id:b("useGroupHideSuggestionMutation_facebookRelayOperation"),metadata:{},name:"useGroupHideSuggestionMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("useGroupUnhideSuggestionMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3727242820634556"}),null);
__d("useGroupUnhideSuggestionMutation.graphql",["useGroupUnhideSuggestionMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"GroupUnhideSuggestionResponsePayload",kind:"LinkedField",name:"group_unhide_suggestion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useGroupUnhideSuggestionMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useGroupUnhideSuggestionMutation",selections:c},params:{id:b("useGroupUnhideSuggestionMutation_facebookRelayOperation"),metadata:{},name:"useGroupUnhideSuggestionMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("GroupsCometCard_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"source"}],kind:"Fragment",metadata:null,name:"GroupsCometCard_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},{args:[{kind:"Variable",name:"source",variableName:"source"}],kind:"FragmentSpread",name:"GroupsCometJoinGroupButtonRelay_group"},{alias:null,args:null,concreteType:"GroupSuggestedCoverPhoto",kind:"LinkedField",name:"group_suggested_cover_photos",plural:!0,selections:[{alias:"suggested_cover_image",args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:a,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_wayfinding_topics",plural:!1,selections:[{args:null,documentName:"GroupsCometCard_group",fragmentName:"GroupsCometTopicBreadcrumbsForGroup_group",fragmentPropName:"group",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:"cover_image",args:[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:430}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:a,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:1},{kind:"Literal",name:"location",value:"GROUPS_DISCOVER_TAB"}],concreteType:"GroupSnippetsConnection",kind:"LinkedField",name:"group_snippets",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupSnippetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"GroupSnippet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'group_snippets(first:1,location:"GROUPS_DISCOVER_TAB")'}],type:"Group",abstractKey:null}}();e.exports=a}),null);
__d("GroupsCometRecommendationContext_recContext.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometRecommendationContext_recContext",selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon_source",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_sources",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"description",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"GYSJSocialContext",abstractKey:null}}();e.exports=a}),null);
__d("CometContainerPressable.react",["CometContainerPressableContext","ReactHoverEvent.react","ReactPressEvent.react","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useRef,k=b.useState;function a(a){var b=a.children,e=a.disabled;e=e===void 0?!1:e;var f=a.forwardedRef,g=a.tagName;g=g===void 0?"div":g;var n=a.testOnly_pressed;n=n===void 0?!1:n;a=a.xstyle;var o=k(n),p=o[0];o=o[1];var q=k(!1),r=q[0];q=q[1];var s=k(function(){return new Map()}),t=s[0];s=k(null);var u=s[0],v=s[1];s=j(null);d("ReactHoverEvent.react").useHover(s,{disabled:e,onHoverChange:q});d("ReactPressEvent.react").usePress(s,{disabled:e,onPressChange:o});q=function(a){var b=l(t);a.button===2?b.onContextMenu(a):b.onPress(a)};o=function(a){var b=l(t);b.onContextMenu(a)};var w=i(function(){return{onMount:function(a,b){t.set(b,a),a.url!=null&&v([a.url,a.target])},onUnmount:function(a){t["delete"](a),v(null)}}},[t]);a=c("stylex").compose(typeof a==="function"?a({disabled:e,focusVisible:!1,focused:!1,hovered:r,pressed:n||p}):a);var x=a.cursor;a=babelHelpers.objectWithoutPropertiesLoose(a,["cursor"]);var y=h.jsx("div",{"aria-hidden":"true",className:c("stylex")(m.button,x!=null&&{cursor:x}),onClick:q,onContextMenu:o,ref:s});if(u!=null){var z=u[0];u=u[1];y=h.jsx("a",{"aria-hidden":"true","aria-label":"ignore this",className:c("stylex")(m.button,x!=null&&{cursor:x}),href:z,onClick:q,onContextMenu:o,ref:s,tabIndex:-1,target:u})}return h.jsxs(g,{className:c("stylex")(m.container,a),ref:f,children:[h.jsx(c("CometContainerPressableContext").Provider,{value:w,children:typeof b==="function"?b({disabled:e,focusVisible:!1,focused:!1,hovered:r,pressed:n||p}):b}),y]})}a.displayName=a.name+" [from "+f.id+"]";function l(a){var b=Array.from(a.keys())[0];a=b&&a.get(b);if(!a)throw c("unrecoverableViolation")(n,"comet_ui");return a}var m={button:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},container:{display:"j83agx80",position:"l9j0dhe7",zIndex:"du4w35lb",":not([disabled]) .gpq6b651":{zIndex:"kw9vllmg"},":not([disabled]) .du4w35lb":{zIndex:"ht7ia4xh"}}},n="CometContainerPressable clicked when it doesn't exactly one target pressable within";g["default"]=a}),98);
__d("useGroupHideSuggestionMutation",["createUseMutation_DEPRECATED","useGroupHideSuggestionMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(a){var d=c("createUseMutation_DEPRECATED")(h!==void 0?h:h=b("useGroupHideSuggestionMutation.graphql"),void 0,function(){return a},function(){return a});return d};g["default"]=a}),98);
__d("useGroupUnhideSuggestionMutation",["createUseMutation_DEPRECATED","useGroupUnhideSuggestionMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;a=c("createUseMutation_DEPRECATED")(h!==void 0?h:h=b("useGroupUnhideSuggestionMutation.graphql"));g["default"]=a}),98);
__d("useGroupsCometHideGYSJSuggestionMutation",["fbt","cometPushToast","promiseDone","useGroupHideSuggestionMutation","useGroupUnhideSuggestionMutation"],(function(a,b,c,d,e,f,g,h){"use strict";var i=function a(b){var e=b.groupID,f=b.groupName,g=b.hide,i=b.unhide;c("promiseDone")(g({group_id:e,source_type:"suggestion"}).then(function(){},function(){d("cometPushToast").cometPushErrorToast({action:{label:h._(/*FBT_CALL*/"Try again"/*FBT_CALL*/),onPress:function(){a({groupID:e,groupName:f,hide:g,unhide:i})}},message:h._(/*FBT_CALL*/"There was an error changing your group suggestion preferences."/*FBT_CALL*/)})}))};function a(a,b,d){d=c("useGroupHideSuggestionMutation")(d);var e=c("useGroupUnhideSuggestionMutation")(),f=d();d=function(){i({groupID:a,groupName:b,hide:f,unhide:e})};return{hideGYSJMutation:d}}g["default"]=a}),98);
__d("useGroupsCometHideGroupSuggestionFRX",["recoverableViolation","useCometRouteTracePolicy","useLaunchFRXFlow"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.entryPoint;a=a.groupID;var d=h();a=c("useLaunchFRXFlow")({content_id:a,entry_point:b,location:d,trigger_event_type:"REPORT_BUTTON_CLICKED"});b=a[0];return[b]}function h(){var a=c("useCometRouteTracePolicy")();if(a==="comet.app")return"UNKNOWN";if(a==="comet.home"||a==="gemini.home"||a==="work_galahad.feed_newsfeed")return"FEED";if(a==="comet.group"||a.startsWith("comet.group.")||a.startsWith("comet.groups.")||a==="gemini.group"||a.startsWith("gemini.group.")||a.startsWith("comet.colleges.campus.groups")||a.startsWith("comet.survey."))return"GROUP";c("recoverableViolation")('Un-mapped trace policy. Please add "'+a+" to the mapping in useGroupsCometHideGroupSuggestionFRX","groups_comet");return"UNKNOWN"}g["default"]=a}),98);
__d("GroupsCometCard.react",["fbt","ix","CometCard.react","CometContainerPressable.react","CometImageCover.react","CometPressable.react","CometRelay","GroupsCometCard_group.graphql","GroupsCometJoinGroupButtonRelay.react","TetraCircleButton.react","TetraTextPairing.react","emptyFunction","fbicon","react","recoverableViolation","stylex","unrecoverableViolation","useGroupsCometHideGYSJSuggestionMutation","useGroupsCometHideGroupSuggestionFRX","useNullthrowsViolation","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useCallback,m={bottomSection:{paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso"},card:{display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",justifyContent:"i1fnvgqd"},coverPhotoContainer:{paddingBottom:"p5srzudy",position:"l9j0dhe7",width:"k4urcfbm"},coverPhotoInner:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",borderTopEndRadius:"pw54ja7n",borderTopStartRadius:"ue3kfks5",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},divider:{backgroundColor:"pwoa4pd7",height:"ay7djpcl",width:"k4urcfbm"},imageLink:{width:"k4urcfbm"},join:{paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a"},link:{color:"acu7sv3q",":hover":{textDecoration:"gpro0wi8"}},root:{alignItems:"gs1a9yip",boxSizing:"rq0escxv",cursor:"nhd2j8a9",display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",width:"k4urcfbm"},text:{paddingTop:"pybr56ya",paddingEnd:"hv4rvrfc",paddingBottom:"qt6c0cv9",paddingStart:"dati1w0a"},title:{paddingBottom:"e5nlhep0"},xoutButton:{end:"swmj3c3o",position:"pmk7jnqg",top:"fcg2cn6m"}};function a(a){var e,f,g,n=a.group$key,o=a.localCacheID,p=a.headlineLineLimit;p=p===void 0?2:p;var q=a.onCancel,r=q===void 0?c("emptyFunction"):q;q=a.onConversion;var s=q===void 0?c("emptyFunction"):q;q=a.onImpression;var t=q===void 0?c("emptyFunction"):q;q=a.onVisitLandingPage;q=q===void 0?c("emptyFunction"):q;var u=a.onXOut,v=u===void 0?c("emptyFunction"):u;u=a.recommendationContext;var w=a.shadow;w=w===void 0?2:w;var x=a.shouldHideXOut;x=x===void 0?!1:x;var y=a.canShowBreadcrumbs;y=y===void 0?!0:y;var z=a.source,A=a.isJoinCTAPrimary;A=A===void 0?!1:A;a=a.shouldHideCTA;a=a===void 0?!1:a;var B=l(function(){return t()},[]);B=c("useSinglePartialViewImpression")({onImpressionStart:B});n=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometCard_group.graphql"),n);if(n==null)throw c("unrecoverableViolation")("Comet Groups Card props does not contain a group","groups_comet");e=(e=n==null?void 0:n.full_name)!=null?e:h._(/*FBT_CALL*/"This group"/*FBT_CALL*/);var C=n==null?void 0:n.url,D=n==null?void 0:n.cover_photo;f=(f=D==null?void 0:(f=D.photo)==null?void 0:(f=f.cover_image)==null?void 0:f.uri)!=null?f:n==null?void 0:(f=n.group_suggested_cover_photos[0])==null?void 0:(f=f.suggested_cover_image)==null?void 0:f.uri;D=(D==null?void 0:(D=D.photo)==null?void 0:D.accessibility_caption)||"";g=n==null?void 0:(g=n.group_snippets)==null?void 0:(g=g.edges[0])==null?void 0:(g=g.node)==null?void 0:(g=g.title)==null?void 0:g.text;var E=c("useNullthrowsViolation")(n.id),F=c("useGroupsCometHideGroupSuggestionFRX")({entryPoint:"GROUPS_DISCOVER_HIDE_BUTTON",groupID:E}),G=F[0];F=function(a){var b=a.get(o);if(b==null)return;var c=b.getLinkedRecords("edges");if(c!=null){c=c;c=c.filter(function(b){if(b==null)return!1;b=a.get(b.getDataID());if(b==null)return!1;b=b.getLinkedRecord("node");if(b==null)return!1;if(b.getDataID()===E)return!1;b=b.getLinkedRecord("group");return b==null?!0:b.getDataID()!==E});b.setLinkedRecords(c,"edges")}};F=c("useGroupsCometHideGYSJSuggestionMutation")(E,e,F);var H=F.hideGYSJMutation;function I(){G({},H),v()}function J(){s()}function K(){r()}if(e==null||C==null||f==null||E==null)throw c("unrecoverableViolation")("Comet Groups Card group object is missing data","groups_comet");g==null&&c("recoverableViolation")("Group snippet is null","groups_comet");F=k.jsx(c("CometPressable.react"),{isContainerTarget:!0,linkProps:{url:C},onPressOut:q,overlayDisabled:!0,xstyle:m.link,children:e});return k.jsx(c("CometContainerPressable.react"),{forwardedRef:B,xstyle:m.root,children:k.jsx(c("CometCard.react"),{background:"white",border:"solid",dropShadow:w,expanding:!0,children:k.jsxs("div",{className:c("stylex")(m.card),children:[k.jsxs("div",{children:[k.jsxs(c("CometPressable.react"),{"aria-label":e,linkProps:{url:C},onPressOut:q,overlayDisabled:!0,xstyle:m.imageLink,children:[k.jsx("div",{className:c("stylex")(m.coverPhotoContainer),children:k.jsx("div",{className:c("stylex")(m.coverPhotoInner),children:k.jsx(c("CometImageCover.react"),{alt:D,src:f})})}),k.jsx("div",{className:c("stylex")(m.divider)})]}),!x&&k.jsx("div",{className:c("stylex")(m.xoutButton),children:k.jsx(c("TetraCircleButton.react"),{icon:d("fbicon")._(i("478238"),20),label:h._(/*FBT_CALL*/"Hide this group"/*FBT_CALL*/),onPress:I,size:32,type:"dark-overlay"})}),k.jsx("div",{className:c("stylex")(m.text),children:k.jsx("div",{className:c("stylex")(m.title),children:k.jsx(c("TetraTextPairing.react"),{body:g,bodyColor:"secondary",bodyLineLimit:1,headline:F,headlineLineLimit:p,level:3,meta:y&&n.if_viewer_can_see_wayfinding_topics?k.jsx(d("CometRelay").MatchContainer,{match:n.if_viewer_can_see_wayfinding_topics,props:{showGroupsTopic:!1,source:z}}):null,metaLineLimit:1,metaLocation:"above"})})})]}),k.jsxs("div",{className:c("stylex")(m.bottomSection),children:[u,a===!0?null:k.jsx("div",{className:c("stylex")(m.join),children:k.jsx(c("GroupsCometJoinGroupButtonRelay.react"),{group$key:n,isPrimary:A,onPressCancelRequest:K,onPressJoin:J,source:z})})]})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometDiscoverStyles",[],(function(a,b,c,d,e,f,g){"use strict";a={groupsHScroll:{marginTop:"n1l5q3vz"},groupsHScrollSeparator:{backgroundColor:"pwoa4pd7",height:"ay7djpcl",marginTop:"bcvklqu9",marginBottom:"nzypyw8j"},rowContainer:{boxSizing:"rq0escxv",marginEnd:"ad2k81qe",marginStart:"f9o22wc5",maxWidth:"q90w0soq",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a",width:"k4urcfbm","@media (min-width: 768px)":{paddingEnd:"n43lv3z1",paddingStart:"pofieoiv"}}};g["default"]=a}),98);
__d("GroupsCometCategorySectionPlaceholder.react",["fbt","BaseGlimmer.react","CometCard.react","CometHScroll.react","GroupsCometDiscoverStyles","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={card:{minHeight:"sn7ne77z"},categoryName:{height:"rgmg9uty",width:"k6hq67h2"},categorySubtitle:{height:"gl3lb2sf",marginTop:"aov4n071",width:"a9ndjppc"},groupDescription:{height:"hm271qws",marginTop:"aahdfvyu",marginEnd:"cxmmr5t8",marginStart:"dhix69tm",marginBottom:"eia6bor4",width:"n99xedck"},groupName:{height:"jnigpg78",marginStart:"dhix69tm",marginTop:"n1l5q3vz",width:"gzy3xfl0"},groupPhoto:{paddingBottom:"p5srzudy",width:"k4urcfbm"},join:{borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",height:"kn9t4qvh",marginTop:"n1l5q3vz",marginEnd:"wkznzc2l",marginBottom:"n851cfcs",marginStart:"dhix69tm",width:"gzy3xfl0"}};function k(a){return i.jsxs("div",{className:c("stylex")(c("GroupsCometDiscoverStyles").rowContainer),children:[i.jsx(c("BaseGlimmer.react"),{className:c("stylex")(j.categoryName),index:0}),a.withSubtitle&&i.jsx(c("BaseGlimmer.react"),{className:c("stylex")(j.categorySubtitle),index:1}),i.jsx("div",{className:c("stylex")(c("GroupsCometDiscoverStyles").groupsHScroll),children:i.jsx(d("CometHScroll.react").Container,{accessibilityLabel:h._(/*FBT_CALL*/"Loading more groups."/*FBT_CALL*/),cardWidth:{minWidth:300,type:"responsive"},disableScrolling:!0,gap:8,hideArrows:!0,children:Array(20).fill(void 0).map(function(a,b){return i.jsx(d("CometHScroll.react").Child,{children:i.jsx(k.PlaceholderCard,{})},b)})})}),i.jsx("div",{className:c("stylex")(c("GroupsCometDiscoverStyles").groupsHScrollSeparator)})]})}k.displayName=k.name+" [from "+f.id+"]";k.PlaceholderCard=function(){return i.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,expanding:!0,xstyle:j.card,children:[i.jsx(c("BaseGlimmer.react"),{className:c("stylex")(j.groupPhoto),index:0}),i.jsx(c("BaseGlimmer.react"),{className:c("stylex")(j.groupName),index:1}),i.jsx(c("BaseGlimmer.react"),{className:c("stylex")(j.groupDescription),index:2}),i.jsx(c("BaseGlimmer.react"),{className:c("stylex")(j.join),index:3})]})};g["default"]=k}),98);
__d("GroupsCometDiscoverRoot.Loading.react",["CometContentArea.react","GroupsCometCategorySectionPlaceholder.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:h.jsx("div",{className:"k4urcfbm aodizinl",children:Array(3).fill(void 0).map(function(a,b){return h.jsx(c("GroupsCometCategorySectionPlaceholder.react"),{withSubtitle:!0},b)})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometDiscoverSeeAllCard.react",["fbt","ix","CometCard.react","CometHScroll.react","CometLink.react","TetraCircleButton.react","TetraText.react","emptyFunction","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=h._(/*FBT_CALL*/"See all"/*FBT_CALL*/);function a(a){var b=a.onPressCTA;b=b===void 0?c("emptyFunction"):b;var e=a.seeAllUrl;a=a.seeAllFbt;a=a===void 0?k:a;return j.jsx(d("CometHScroll.react").Child,{expanding:!0,children:j.jsx(c("CometCard.react"),{children:j.jsx("div",{className:"taijpn5t datstx6m j83agx80 bp9cbjyn",children:j.jsxs("div",{className:"cbu4d94t j83agx80 bp9cbjyn",children:[j.jsx(c("TetraCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("514454"),20),label:a,linkProps:{url:e},onPress:b,size:48,type:"overlay"}),j.jsx("div",{className:"fdg1wqfs",children:j.jsx(c("CometLink.react"),{href:e,children:j.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:a})})})]})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometRecommendationContext.react",["CometRelay","GroupsCometRecommendationContext_recContext.graphql","IconSource","TetraIcon.react","TetraOverlappingFacepile.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e,f;a=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometRecommendationContext_recContext.graphql"),a.recContext);if(a==null)return null;e=((e=a==null?void 0:a.profile_sources)!=null?e:[]).map(function(a){a=a==null?void 0:a.uri;return a==null?null:{source:{uri:a}}}).filter(Boolean);f=a==null?void 0:(f=a.icon_source)==null?void 0:f.uri;if(e.length===0&&f!=null){f=new(c("IconSource"))("FB",f,24);return i.jsxs("div",{className:"ozuftl9m btwxx1t3 j83agx80 bp9cbjyn",children:[i.jsx("div",{className:"kkf49tns",children:i.jsx(c("TetraIcon.react"),{icon:f,size:24})}),i.jsx("div",{className:"b3onmgus d1544ag0 hpfvmrgz g5gj957u buofh1pr rj1gh0hx",children:i.jsx(c("TetraText.react"),{color:"secondary",numberOfLines:2,type:"body3",children:a==null?void 0:(f=a.description)==null?void 0:f.text})})]})}return i.jsx("div",{className:"hy1o8qpp cgat1ltu",children:i.jsx(c("TetraOverlappingFacepile.react"),{isTextInline:!0,items:e,size:24,text:i.jsx("div",{className:"stjgntxs ni8dbmo4",children:i.jsx(c("TetraText.react"),{color:"secondary",numberOfLines:2,type:"body3",children:a==null?void 0:(f=a.description)==null?void 0:f.text})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);