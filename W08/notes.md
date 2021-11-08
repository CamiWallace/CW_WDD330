Week08
CSS Transforms and Transitions
Translate property lets you translate,rotate,scale, or skew elements on a page
Translation function lets you move elements along x and y axis
Translated element can only move relative to its current position
translate(x,y) function moves an element x from the left, and y from the top:
May need to use a webkit to account for older browsers
scale(x,y) function scales an element by the defined factors horizontally then vertically
You can also only scale vertically or horizontally
Transforms can override each other, providing a space-separated list of transform functions.
Scaling will not have an impact on document flow. This means that it does not change anything around it, so you run into issues like overflowing text
rotate() function rotates an element around the point of origin by a specified angle value
Angles are generally given in degrees moving clockwise
skew(x,y) function specifies a skew along the x and y axes
You can change the point of origin using  transform-origin()
Order matters!!! (the order in which you translate or rotate)
Transitions allow for simple animations
Here are the steps to create a simple transition using only CSS:
Declare the original state of the element in the default style declaration.
Declare the final state of your transitioned element; for example, a :hover state.
Include the transition functions in your default style declaration using the transition properties, including: transition-property, transition-duration, transition-timing-function, and transition-delay. We’ll look at each of these and how they work shortly.
transition-timing-function lets you control the pace of the transition in even more granular detail.
Timing functions include ease, linear, ease-in, ease-out, ease-in-out.
transition-delay property, it’s possible to introduce a delay before the transition begins
You can do multiple transitions in one call(like changing rotation and color at same time)
To animate an element in CSS, you first create a named animation, then attach it to an element in that element’s property declaration block. Animations in themselves don’t do anything; in order to animate an element, you’ll need to associate the animation with that element.
Animation-duration allows you to set the length of time a animation continues
Animation-name is a required property to create an animation.
Animation-direction normally after reaching the 100% of the keyframe it jumps back to 0% but animation-direction changes this behavior
There is a animation shorthand property.
Below is an example of longhand and then the shorthand version
.verbose {
   animation-name: appearDisappear;
   animation-duration: 300ms;
   animation-timing-function: ease-in;
   animation-iteration-count: 1;
   animation-direction: alternate;
   animation-delay: 5s;
   animation-fill-mode: backwards;
   animation-play-state: running;
}




/* shorthand */
.concise {
   animation: 300ms ease-in alternate 5s backwards appearDisappear;
}
Be careful with naming!

Canvas, SVG, and Drag and Drop
Canvas api allows you to draw shapes, lines, arcs, text, and more.
You start by adding a canvas element to the page.
The canvas element takes both width and height
You must set the width and height of the canvas element( not just in css) or it will use a default width and height
Drawing on the canvas happens via the canvas api
The context is the place where your drawing is rendered.
Obtain the context by calling the getContext() method.
The grid of the canvas is not the same as the one you use with math. Start in the top-left corner as 0,0.
To save your drawing use the api’s toDataURL() method
A couple of good youtube videos explaining canvas js:
https://www.youtube.com/watch?v=EO6OkltgudE
https://www.youtube.com/watch?v=Yvz_axxWG4Y
https://www.youtube.com/watch?v=gm1QtePAYTM (more in depth)