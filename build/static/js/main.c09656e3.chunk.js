(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{16:function(t,e,s){"use strict";s.r(e);var a=s(1),c=s.n(a),n=s(5),i=s.n(n),o=s(6),r=s(7),l=s(8),d=s(10),b=s(9),u=s(0),j=function(t){var e=t.title,s=t.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:e}),s]})},h=s(2),O=s.n(h),k=function(t){var e=t.good,s=t.neutral,a=t.bad,c=t.total,n=t.positivePercentage;return Object(u.jsxs)("ul",{className:O.a.statisticsList,children:[Object(u.jsxs)("li",{className:O.a.statisticItem,children:["Good:",e]}),Object(u.jsxs)("li",{className:O.a.statisticItem,children:["Neutral:",s]}),Object(u.jsxs)("li",{className:O.a.statisticItem,children:["Bad:",a]}),Object(u.jsxs)("li",{className:O.a.statisticItem,children:["Total:",c]}),Object(u.jsxs)("li",{className:O.a.statisticItem,children:["Positive feedback:",n,"%"]})]})},p=s(3),f=s.n(p),m=function(t){var e=t.options,s=t.onLeaveFeedback;return Object(u.jsx)("ul",{className:f.a.optionsList,children:e.map((function(t){return Object(u.jsx)("li",{className:f.a.feedbackOption,children:Object(u.jsx)("button",{type:"button",className:f.a.button,onClick:function(){return s(t)},children:t},t)})}))})},x=function(t){var e=t.message;return Object(u.jsx)("h2",{children:e})},v=function(t){Object(d.a)(s,t);var e=Object(b.a)(s);function s(){var t;Object(r.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.countTotalFeedback=function(){return t.state.bad+t.state.neutral+t.state.good},t.countPositiveFeedbackPercentage=function(){return t.state.bad+t.state.neutral+t.state.good===0?0:Math.floor(100*t.state.good/(t.state.bad+t.state.neutral+t.state.good))},t.onLeaveFeedback=function(e){return t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{title:"Please leave feedback",children:Object(u.jsx)(m,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(u.jsx)(j,{title:"Statistics",children:this.countTotalFeedback()?Object(u.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(u.jsx)(x,{message:"No feedback given"})})]})}}]),s}(a.Component),g=v;i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))},2:function(t,e,s){t.exports={statisticsList:"Statistics_statisticsList__3xq5U",statisticItem:"Statistics_statisticItem__9mQxD"}},3:function(t,e,s){t.exports={optionsList:"FeedbackOptions_optionsList__3OwgR",feedbackOption:"FeedbackOptions_feedbackOption__28_Fd",button:"FeedbackOptions_button__2y48K"}}},[[16,1,2]]]);
//# sourceMappingURL=main.c09656e3.chunk.js.map