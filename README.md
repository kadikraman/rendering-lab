# React Rendering

## Overview

In this module, we're going to have a go at actually using each of the component lifecycle methods.

### `componentWillReceiveProps()`
Let's have a look at the first section. This is a little online survey of a book. People can rate the
book based on how much they enjoyed it. They have 3 options: 'loved it', 'hated it' and 'indifferent'.
We want to record not only the score the audience gave to the book, but also the trend of ratings as
they are being given. So for example, if someone likes the book, the average score is *increasing*, if they
dislike the book, it would be *decreasing* and if they're indifferent the score is *stable*. Have a look at
`<Rating />` and `<Survey />` and implement a `componentWillReceiveProps()` which will compare the `nextProps.rating`
(passed into the method) to `this.props.rating` and calls `this.setState` with the correct values.

By the end of this section, all the tests under `<Rating />` section should be passing.


### `shouldComponentUpdate()`
For this section, run the sample app and open the developer console. Look at the second section of tasks. You should
see 3 circles: red, yellow and green. There is also a button which swaps the color of red and green circles. If you look
at the developer console, we are logging out a message whenever a circle is re-rendered. Notice that all 3 circles get
re-rendered whenever we swap the colours.

The easiest way to prevent this unnecessary rerender is by using the `shouldComponentUpdate()` lifecycle hook. Open
`Circle.js` and add a `shouldComponentUpdate()` which will return `true` only if the new color being passed in is different
from the existing one.

By the end of this section, the test under `<Circle />` should be passing.


### `componentWillUpdate()`
For this section, we've got a little random .gif generator. Pressing the 'New random .gif!' button will make/perform a request
to giphy and display a new random .gif for us! Neat! Try pressing the button now. You might have noticed
that it takes a bit of time for the new .gif to display. Perhaps we'd like a little indication of the loading. Maybe a
loading bar? Now, in reality you could do this loading bar in React, however for the sake of this example, lets imagine
that the loading bar is done by a different library that React has no control over. You can set this loading bar in the
`showLoadingBar()` function which is already created for you in `<Animation />`. Call this function through the
`componentWillUpdate()` lifecycle method and see that happens! If you've done it correctly you should see a pink loading
bar at the top of the screen every time a new .gif is being loaded.

By the end of this section, the test under `<Animation />` should be passing.


### `componentDidUpdate()`
`componentDidUpdate()` is generally used to interact with elements outside of React. Suppose we had a Pikachu library that
handles rendering a Pikachu on the page. The Pikachu image is not part of the React application, but we need to be able to
interact with it within React. Open the `<Pikachu />` component and observe it renders two buttons: a button for making the
Pikachu bigger and another one for making it smaller. You can also see that pressing the buttons will change the component's
internal state to reflect how big the Pikachu should be. There is already a method that resizes the Pikachu based on new
inputs. All we need to do is add a `componentDidUpdate()` to call it! Go on, have a go!

By the end of this section, the test under `<Pikachu />` should be passing.
