(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,a){},3:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),o=a.n(c),s=(a(16),a(10)),i=a(4),l=a(5),u=a(7),h=a(6),d=(a(3),a(0)),m=function(e){var t=e.id,a=e.tags,n=e.image,r=e.onClick;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:n,alt:a,className:"ImageGalleryItem-image",onClick:r})},t)};a(18);function g(e){var t=e.image,a=e.onSelect;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(d.jsx)(m,{id:t,tags:r,image:n,largeImageURL:c,onClick:function(){return a({largeImageURL:c,tags:r})}})}))})}var j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{onChange:this.handleChange,value:this.state.query,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.a.Component),b=document.querySelector("#modal-root"),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.srcImg,a=e.altImg;return Object(c.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{width:"800",height:"600",src:t,alt:a})})}),b)}}]),a}(n.Component);var f={fetchImages:function(e,t){return console.log(t),fetch("https://pixabay.com/api/?key=16471285-08281fa67152cd8514adcae08&q=".concat(e,"&image_type=photo&orientation=horizontal&safesearch=true&page=").concat(t,"&per_page=12")).then((function(e){return e.ok?e.json():Promise.refect(new Error("EROR"))}))}},y=function(e){var t=e.onClick;return Object(d.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},O=a(11),v=a.n(O),x="idle",S="pending",w="resolved",k="rejected",I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",image:[],error:null,page:1,status:x,selectedImg:null},e.loadNextPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.newQuery=function(t){e.setState({query:t})},e.handleSelectedImg=function(t){e.setState({selectedImg:t})},e.closeModal=function(t){e.setState({selectedImg:null})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.query,r=this.state.page;t.query===this.state.query&&t.page===this.state.page||(this.setState({status:S}),f.fetchImages(n,r).then((function(e){return a.setState({status:w,image:[].concat(Object(s.a)(a.state.image),Object(s.a)(e.hits))})})).catch((function(e){return a.setState({error:e,status:k})}))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.query,n=e.image,r=e.selectedImg;return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{query:a,onSubmit:this.newQuery}),t===S&&Object(d.jsx)(v.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),t===x&&Object(d.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432 \u043f\u043e\u0438\u0441\u043a."}),t===k&&Object(d.jsx)("div",{children:"\u041e\u0448\u0438\u0431\u043a\u0430"}),t===w&&Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(g,{image:n,onSelect:this.handleSelectedImg}),Object(d.jsx)(y,{onClick:this.loadNextPage}),r&&Object(d.jsx)(p,{srcImg:r.largeImageURL,altImg:r.tags,onClose:this.closeModal})]})]})}}]),a}(r.a.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ccd10dd1.chunk.js.map