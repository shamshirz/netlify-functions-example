# Closed & how!

This is a practice area to prove that netlify requests can be cached at the proxy level
 * So clients can request the data, but netlify will return previous results (example, only have new data once a day, might as well cache it)
 
Second one, was testing if we could use that in tandem with the Spotify API to simplify the previous approach I had for that API.

Great news, it worked! 
That code now lives in the main website  - https://github.com/SylverStudios/SylverStudios.github.io/pull/44
Now that we have a working example in that repo, it's unlikely this will be the place to test going forward.

# Example app

```bash
> yarn build:server && yarn start:server
> open localhost:9000/cached
```
