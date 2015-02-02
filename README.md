# Tumblr blog content extraction and analysis

> Tonight (2nd of February 2015) a friend of mine asked me if I knew a way to quickly count every likes/reblog/reply on his blog. One hour later here we are.


### Setup

- Install NodeJS & Npm
- `git clone tumblr-notes`
- `npm install`

### How to extract every post (with notes information) of a tumblr blog as JSON

Just run (using your tumblr api credentials):

```bash
BLOG_NAME=YOUR_BLOG_NAME CONSUMER_KEY=YOUR_CONSUMER_KEY CONSUMER_SECRET=YOUR_CONSUMER_SECRET TOKEN=YOUR_TOKEN TOKEN_SECRET=YOUR_TOKEN_SECRET node retrieve_posts.js >> posts.json
```

It should be something like this:

```bash
BLOG_NAME=thedailytask.tumblr.com CONSUMER_KEY=et6nbcfEhHez8WRxtbE4NGfRvkbdufAM9YXvkAo3P3gQFvjv2a CONSUMER_SECRET=8ED6UpbAcVXLABjHu4HLHzNorge7Ux2CVLRano7Myj7EnjNyqX TOKEN=76ttFUtQJsUB8wWNbAv9RtuxdKYGvJr9aEKpUh4LEBJPRUkc8Z TOKEN_SECRET=eVm4fNyb8doYuYdZtKgU7GL3sHguvdfxjYT42ek8uBzHnDWZKK node retrieve_posts.js >> posts.json
```

### How to analyze tumblr blog data (posts.json)

##### Retrieve global count and sum by type

```
$ node analyze_summary.js
{ sum: 31970, like: 15059, reblog: 16711, posted: 186, reply: 14 }
```

##### Retrieve every likers along with their note count

```
$ node analyze_likers.js
377: isaizenay
186: thedailytask
136: daniandpuffins
116: kneeboarder17
114: jeanderoche
...
``` 

##### Export post count by date as csv

```
$ node analyze_post_by_count.js
66;http://thedailytask.tumblr.com/post/109879218750/150202;2015-02-02
88;http://thedailytask.tumblr.com/post/109782847335/150201;2015-02-01
132;http://thedailytask.tumblr.com/post/109685047545/150131;2015-01-31
117;http://thedailytask.tumblr.com/post/109623066085/150130;2015-01-31
96;http://thedailytask.tumblr.com/post/109506687535/150129;2015-01-29
102;http://thedailytask.tumblr.com/post/109399830010/280115;2015-01-28
112;http://thedailytask.tumblr.com/post/109313620585/150127;2015-01-27
...
```


##### Retrieve every liker's tumblr

```
$ node analyze_likers_websites.js
http://margionetas.tumblr.com/
http://daniandpuffins.tumblr.com/
http://finaltears.tumblr.com/
http://the-promised-wlan.tumblr.com/
...
``` 

##### Retrieve every post tags

```
node analyze_tags.js
14sec, 1900, 1973, 1985, 2.5d, 2001, 2001 space odyssey, 2011, 2012, 2013, 2014, 2015, 2017, 23, 25 fps, 2d, 3, 360, 3D, 3d, 3d layers, 420, 44, 4th, 5 maj, 5 majeur, 5 panel, 50mm, 54, 5maj, 7, 7 sins, 70's, 7d, 80's, 8bit, 8bits, 9, 99 problems, AE, After Effects, Aftereffects, Andrew Collins, BD, Black and White, Blob, Blood, Brit, Brit Marling, C4D, CG, Cinema 4D, Colorfull, Cube, DC, DC comics, Djela, E.T, Farrow, GL, Gatsby, Gif, Guile, HDRi, IA, IL, ILU, Infinite,
```
