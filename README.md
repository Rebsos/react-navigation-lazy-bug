When using createMaterialTopTabNavigator with react-native 0.59.0 - 0.60.3 (latest), lazy does not working anymore correctly. Previously the next tab gets immediately rendered _while_ swiping. Since react-native@0.59.0 it renders only after the tab is fully focused.

### Current Behavior

swipeStart -> swipeEnd -> Tab2Focus -> __Tab2Render__

![](lazy_bug.gif)

### Expected Behavior

swipeStart -> __Tab2Render__ -> swipeEnd -> Tab2Focus

![](no_lazy_bug.gif)

### How to reproduce

__Option 1:__ git clone git@github.com:Rebsos/react-navigation-lazy-bug.git

__Option 2__ (Minimal example):
1. react-native init demo
2. Add react-navigation like described in the [docs](url)
3. Copy the "[Minimal example of tab-based navigation](url)" from the docs into App.js
4. Change to createMaterialTopTabNavigator
5. Add lazy to the configs
6. Optinally: Change backgroundColor to blue

Try to swipe slowly, the second tab does only render onFocus

### Your Environment

| software         | version
| ---------------- | -------
| react-navigation | 3.x.x
| react-native     | 0.58.0 - 0.60.3 (latest)
| node             | 8.12.0
| npm or yarn      | yarn

### What I've tested

- Android only (iOS is not affected)
- In prod and dev mode
- Emulator and real device
- react-native-gesture-handler is not the problem. Tested with 1.3.0 (latest), 1.1.3, 1.0.8
- Downgrading react-navigation does not solve it. Tested with 3.11.1 (latest), …, 3.0.5
- The Problem occurs first time in react-native 0.59.0 with any version of react-navigation:

React-native | Lazy problem
------------ | -----
0.58.6       | No
0.59.        | Yes
0.59.10	     | Yes
0.60.3 (latest)	| Yes
