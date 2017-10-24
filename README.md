## Dark Sky UI

A simple UI for the Dark Sky API

### Installation

* `npm install`
* copy `.env.sample` file to `.env` add Dark Sky API key

### Development

```bash
npm run dev
```

### TODO
* test suite
* replace blueprint w/ homegrown time input forms.  blueprint is a great UI toolkit, but is arguably more powerful than necessary for a small app like this.  ([browser support](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time) for time inputs is patchy, and I had thought rolling my own would be a pain, but looking at what blueprint did realized it would be relatively doable)
* better input validation.  DOM input forms provide their own native min/max value validation, but I was surprised to find that they only kick in under some circumstances (user uses arrow keys to increment/decrement value), and not others (user manually inputs number).  browser support for native validation is also likely to be inconsistent.
* memoize selectors using reselect
