"use strict";(self.webpackChunkjuan_herreros_personal_site=self.webpackChunkjuan_herreros_personal_site||[]).push([[21],{1173:function(e,t,n){n.d(t,{p:function(){return d},A:function(){return u}});var a=n(6540),s=n(557),l=n(6835),r=n(3328),i=n(7715),o=n(7169);var c=e=>{let{post:t}=e;return null};const h=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var m=e=>{let{data:{post:t},children:n}=e;return(0,s.Y)(r.A,null,(0,s.Y)(l.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,s.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,s.Y)("time",null,t.date),t.tags&&(0,s.Y)(a.Fragment,null," — ",(0,s.Y)(i.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,s.Y)("span",null,t.timeToRead," min read")),(0,s.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:h.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,s.Y)(c,{post:t}))};const d=e=>{var t,n,a;let{data:{post:l}}=e;return(0,s.Y)(o.A,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function u(e){let{...t}=e;return a.createElement(m,t)}},7715:function(e,t,n){var a=n(557),s=n(6540),l=n(4194),r=n(3601),i=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,r.A)();return(0,a.Y)(s.Fragment,null,t.map(((e,t)=>(0,a.Y)(s.Fragment,{key:e.slug},!!t&&", ",(0,a.Y)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.A)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},1185:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.p},default:function(){return o}});var a=n(6540),s=n(8453);function l(e){const t=Object.assign({p:"p",h4:"h4",span:"span",ul:"ul",li:"li",a:"a",ol:"ol"},(0,s.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Welcome to a new post of my blog!"),"\n",a.createElement(t.p,null,"This time I am writing about how I have created a backend for this website, including a database, a lamdba dunction and an API, which I call from the frontend.\nMoreover, all of this is completely automated and version-controlled, so that it can be deployed and updated in a controlled, repeatable way."),"\n",a.createElement(t.h4,null,"The architecture"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 45.416666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABa0lEQVR42pVSPUsDQRDNn/NfWAX8BXZiY5NKBRtbGxVtIgiCoIEIihJtbKIGTFTU6B2XM+aye/v5nN29kBBj4RyP2Y/ZNzPvpgSyOO4hSVK3hDU2eGtgYfBfKxl6w6TAUObQxXtFpNYSHXmpA4QKmLU31o4JqRY0rzLcN3KkscDl4RcyKrbeOkKjU/dBmrK6R9NwH5caw5wgFCUwjhDYW22jutFF5+4blfkmog6wVF3A+vGyJzT279YzIuumHK8Jw4ArapkyMa7B6UJRhiFTvo1McEIOJ6mLcTJQh1St9RidaS/PpIa00yO4QIS1lAQVzoQIXinSWUt/zsVvQhs0nLLicqfyjNp2itZtH2vlRyQR8Lk5B3uxglrDorzYpq5AbUq0owxvPQ4m9AzCwq5PIjzcDBC/M5zudsEyoH++BfN0hscXjf2DDwg5/jG5NH4qSq7k3I2BnhgJHdoY6eRHSQcNZSGNM1HETo7ND6CqtH16IXpXAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Picture"\n        title=""\n        src="/static/3f1bd5482161fdab9696dcee6fb7f85b/7d769/arch.png"\n        srcset="/static/3f1bd5482161fdab9696dcee6fb7f85b/5243c/arch.png 240w,\n/static/3f1bd5482161fdab9696dcee6fb7f85b/ab158/arch.png 480w,\n/static/3f1bd5482161fdab9696dcee6fb7f85b/7d769/arch.png 960w,\n/static/3f1bd5482161fdab9696dcee6fb7f85b/9d6e6/arch.png 1276w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"The frontend of this website, as described in the previous blog posts, is composed by:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"A ",a.createElement(t.a,{href:"https://aws.amazon.com/s3/"},"S3")," bucket, which hosts the static site generated with Gatsby"),"\n",a.createElement(t.li,null,"A ",a.createElement(t.a,{href:"https://aws.amazon.com/cloudfront/"},"CloudFront")," distribution that serves and secures the site stored in the bucket"),"\n",a.createElement(t.li,null,"A ",a.createElement(t.a,{href:"https://aws.amazon.com/route53/"},"Route 53")," DNS zone with a domain record to provide access to this site on my custom domain"),"\n"),"\n",a.createElement(t.p,null,"To that frontend, now I have added:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"A ",a.createElement(t.a,{href:"https://aws.amazon.com/dynamodb/"},"DynamoDB")," table that hosts the number of visitors"),"\n",a.createElement(t.li,null,"A ",a.createElement(t.a,{href:"https://aws.amazon.com/lambda/"},"Lambda")," funtion that reads and updates that DynamoDB table"),"\n",a.createElement(t.li,null,"An ",a.createElement(t.a,{href:"https://aws.amazon.com/api-gateway/"},"API Gateway")," that exposes the Lambda function"),"\n",a.createElement(t.li,null,"A DNS record for the API gateway, for it to be accessible at a known endpoint"),"\n"),"\n",a.createElement(t.p,null,"The front- and backend communicate over this API, which is called from a ",a.createElement(t.a,{href:"https://reactjs.org/"},"React")," component, which then displays the number of visits to the readers that access the home page."),"\n",a.createElement(t.h4,null,"The Lambda-based API"),"\n",a.createElement(t.p,null,"As described before, the main component of the backend is a Lambda function. This is a very interesting type of ",a.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Serverless_computing"},"serverless computing"),", where I just have to worry about writing the code for the function itself, but not about hosting or serving it. The Lambda funtion:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Receives a the request from the API gateway, including the details that might be included in that request, such as:","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,'The user id, included in the URL. At this point I\'m just using "default" for all users, but the API code is prepared to store the number of visits from each individual user.'),"\n",a.createElement(t.li,null,"An API key, passed as a header"),"\n"),"\n"),"\n",a.createElement(t.li,null,"Queries the table to update and get the number of visits. If there are no visits registered, then it creates the record"),"\n",a.createElement(t.li,null,"Returns the updated number of visits"),"\n"),"\n",a.createElement(t.p,null,"To test the the API is working, I have also included some ",a.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Unit_testing"},"unit tests")," for the lambda function."),"\n",a.createElement(t.h4,null,"Infrastructure as Code: SAM"),"\n",a.createElement(t.p,null,"All of the implementation of the backend is described as code in a language provided by AWS which is called ",a.createElement(t.a,{href:"https://aws.amazon.com/serverless/sam/"},"Serverless Application Model"),".\nThis allows me to avoid having to configure all the services in the console UI, and instead just run a command to deploy the whole backend stack."),"\n",a.createElement(t.p,null,"This is incredibly useful because it allows me to update or redeploy all the services in a blink of an eye. On top of that, all the configuration for all the services that I am using is in the same place and so it is easier to manage. Plus, I have it version controlled, so I can keep track of the changes that I have done to my infrastructure."),"\n",a.createElement(t.h4,null,"Using secrets"),"\n",a.createElement(t.p,null,"I am also using some secrets in my ",a.createElement(t.a,{href:"https://aws.amazon.com/codebuild/"},"CodeBuild")," pipelines now. I store them in the ",a.createElement(t.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html"},"Parameter Store")," of AWS ",a.createElement(t.a,{href:"https://aws.amazon.com/systems-manager/"},"Systems Manager"),". This way I avoid having sensitive information on my public GitHub repositories. Instead of that, I have some placeholder strings which I replace as part of my pipeline."),"\n",a.createElement(t.p,null,"With this, I cover all the remaining points of the ",a.createElement(t.a,{href:"https://cloudresumechallenge.dev/instructions/"},"Cloud Resume Challenge"),", which were 7, 8, 9, 10, 11, 12 and 14. So I consider it complete! It was really a nice learning experience :)"),"\n",a.createElement(t.p,null,"Nonetheless, there are some functional and technical improvements that I have in mind for this site, and I'll keep writing about those in this blog when I include them in the page."),"\n",a.createElement(t.p,null,"As always, I hope you've liked the post. See you in the next one and thanks for reading!"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.RP)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},i=n(1173);function o(e){return a.createElement(i.A,e,a.createElement(r,e))}i.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-the-backend-index-mdx-7236704cbec304b7f0e4.js.map