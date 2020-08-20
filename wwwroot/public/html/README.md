# External standalone pages to include inside the stories.

Use it inside a story page with:
 
```json
{
...
    "text": "<div class=\"iframe-container\"><iframe src=\"http://localhost:3001/public/html/story.html\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"></iframe></div>" 
...
}

```
Communication between iframe and the parent: 

Listener: 
```js
    <form id="form">
      <input type="text" placeholder="Enter message" name="message">
      <input type="submit" value="Click to send">
    </form>
  
    <script>
        window.addEventListener('message', function (event) {
          if (event.data.iframe) {
            alert(`Received ${JSON.stringify(event.data)} from ${event.origin}`);
          }
        });
    </script>
```
Emmit event from the iframe:
```js
<script>
  form.onsubmit = function() {
    // iframe.contentWind ow.postMessage(this.message.value, '*');
    // parent.postMessage(this.message.value, '*'); << Define here the origin
    parent.postMessage({
      me:"I am an object",
      message:this.message.value,
      iframe:true,
      },'*');
    return false;
  };

```

General styles for responsive iFrames:
```css
.iframe-container {
overflow: hidden;
/* 16:9 aspect ratio */
padding-top: 56.25%;
position: relative;
}

.iframe-container iframe {
border: 0;
height: 100%;
left: 0;
position: absolute;
top: 0;
width: 100%;
}
```
