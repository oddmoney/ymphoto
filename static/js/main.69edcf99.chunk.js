(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),i=n.n(r),s=(n(17),n(6)),c=n.n(s),l=n(9),u=n(1),p=n(2),m=n(4),h=n(3),d=n(5),f=(n(20),n(10)),v=n.n(f);n(23);function g(e){var t=e.title,n=e.photo;return a.a.createElement("img",{src:n,alt:t,className:"TourList_Photo"})}var y=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"TourList"},a.a.createElement("div",{className:"TourList_Column"},a.a.createElement(g,{title:this.props.title,photo:this.props.photo})),a.a.createElement("div",{className:"TourList_Column"},a.a.createElement("h1",null,this.props.title),a.a.createElement("div",{className:"TourList_Genres"},this.props.genres.map(function(e,t){return a.a.createElement("span",{className:"TourList_Genre",key:t},e," ")})),a.a.createElement("p",{className:"TourList_Synopsis"},a.a.createElement(v.a,{text:this.props.synopsis,maxLine:"3",ellipsis:" ...",trimRight:!0,basedOn:"letters"}))))}}]),t}(o.Component),_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return a.a.createElement(y,{title:e.title_english,photo:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis,key:e.id})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callPhotoApi=function(){fetch("http://oddmoney.iptime.org:3588/rest/photoList.do",{credentials:"include",method:"post",headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json"},body:{currentSn:"1",numPerPage:"10"}}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._getMovies(),this._callPhotoApi()}},{key:"render",value:function(){var e=this.state.movies;return a.a.createElement("div",{className:e?"App":"App-loading"},e?this._renderMovies():"Loading")}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.69edcf99.chunk.js.map