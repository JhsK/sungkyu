---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

# React.js Virtual DOM이 필요한 이유

React를 처음 공부하면 Virtual DOM 을 사용해서 이전 Virtual DOM의 내용과 비교하여 바뀐 부분만 실제 DOM에 적용하여 많은 변화가 발생하는 웹에서 효율적이다 라는 부분을 쉽게 찾아볼 수 있습니다.

이 내용을 조금 더 깊게 들여다보려고 합니다. 

<br>

## Virtual DOM이 없다면?

Virtual DOM 없이 큰 어플리케이션을 만든다면 서버와 통신하며 요청을 주고 받아서 받은 데이터를 DOM 객체에 속성값, text 등을 수정 및 삭제하는 방식으로 코드를 작성하였고, DOM 객체를 직접 수정하기 때문에 연산을 지속적으로 하게 됨에 따라 repaint, reflow 연산이 빈번해지면서 브라우저가 컴퓨터의 자원을 많이 소모하게 됩니다.

이러한 문제를 해결하기 위해 React는 가상 돔이라는 Virtual DOM을 이용하여 문제를 해결한 것입니다.

위에서 잠깐 언급한 repaint, reflow 연산에 대해 설명하기 전에 간단하게 DOM과 Virtual DOM에 대해 설명드리겠습니다.

<br>

## DOM, Virtual DOM

### DOM 
DOM이란 Document Object Model로 HTML, JS, CSS로 생성되는 것들을 말하며 html 태그 등을 포함합니다.

<br>

### Virtual DOM
일반 DOM에 추상화 개념을 활용한 DOM이 Virtual DOM이며 빈번한 repaint와 reflow 문제를 보완하여 동적이고 다양한 변화가 발생하는 웹을 만들기 위해 최적화 되어 있습니다. 그러므로 Virtual DOM은 SPA 웹 어플리케이션에서 최적의 성능을 발휘합니다.

그렇다고 Virtual DOM을 무조건 신뢰하는 것은 옳지 않습니다. 추가로 DOM이 느리다라는 표현 또한 옳지 않습니다. 그 이유는 DOM은 정적인 페이지에 최적화되어 있기 때문입니다. 예를 들면 회사 소개 페이지와 같은 간단한 페이지 같은 경우 DOM이 훨씬 효율적이며 React를 사용하는 것은 오히려 비효율적입니다.

<br>

## Repaint, Reflow 란?

```js
var style = document.body.style; // 캐싱
style.padding = "20px"; // reflow, repaint
style.border = "10px solid red"; // reflow, repaint
style.color = "blue"; // repaint (레이아웃이 변경되지 않았기 때문에 reflow는 발생하지 않습니다)
style.backgroundColor = "#ffa"; // repaint
style.fontSize = "1rem"; // reflow, repaint

document.body.appendChild(document.createTextNode('hello world!')); // reflow, repaint
```

위의 예제 코드처럼 repaint는 색상이 변경되거나 글자의 내용이 바뀌었을 때 발생되는 연산이며, reflow는 하나의 DOM객체의 크기나 위치 등 레이아웃의 변경 시에 발생합니다.

하지만 위의 코드처럼 한 줄마다 연산이 일어나느 것이 아니라 style에 대한 작업을 일괄적으로 처리하게 되기 때문에 매 한 줄 마다 repaint, reflow 연산이 발생하지는 않습니다.

하지만 그 중에도 한 줄마다 강제로 reflow 연산을 발생시키는 코드들이 존재하는데 그것을 **Forced Reflow**라고 합니다.

자주 사용하는 offsetTop, scrollTo(), innerText, window.scrollX 등이 존재하며 아래 주소를 참고하면 다양한 Forced Reflow를 확인하실 수 있습니다.
> https://gist.github.com/paulirish/5d52fb081b3570c81e3a

<br>

### repaint와 reflow가 발생하는 구간

DOM의 CRUD를 하거나, Style을 수정하면 DOM Tree, Style Rules의 발생으로 Attachment가 발생하여 Render Tree가 발생하게 됩니다.

![브라우저 레이아웃 엔진](https://i.imgur.com/0XdloJi.png)
<img src="https://i.imgur.com/0XdloJi.png" width="30%" height="30%">


<br>

## Virtual DOM의 알고리즘

Virtual DOM의 특징은 앞서 언급했듯이 reflow와 repaint를 줄여 dynamic 한 웹을 만들때에 브라우저 레이아웃 엔진 성능에 최적화를 시켜주는 것인데 이러한 최적화는 어떻게 가능한지 알아보려고 합니다.

### Smart Diffing Algorithm, 조화,조정(Reconciliation)

render가 되었을 때 이 알고리즘이 등장하며, render 되는 순간에 reflow와 repain의 영향을 최소화 하여 어떻게 성능 향상을 할 수 있을까? 에서 시작되었다고 합니다. render를 할 때 마다 render 메서드 안에 선언해놓은 jsx 태크들이 모두 새로 그려진다면 그 만큼의 repaint와 reflow 연산이 발생하게 되므로 알고리즘을 사용한다면 이전과 새로 그려질 태그들의 내용을 비교해서 변경된 부분만 새로 그려 repaint와 reflow 연산을 줄여주게 됩니다.

### React Diffing Process 

![diffing process](https://i.imgur.com/QRtqIui.png)

Smart Diffing Algorithm은 렌더링되어 사용되고 있는 실제 DOM Tree와 React에서 쓰는 in-memory 안에 있는 Virtual DOM Tree를 비교하는 알고리즘으로 최소한의 연산으로 수정작업이 요구되는 실제 돔 객체를 찾아서 수정 및 변경작업을 진행합니다. 이 알고리즘은 Virtual DOM Tree와 일반 DOM Tree에 맵핑되어 있고 어떤 DOM Node가 다른지 찾습니다.

끝으로 정리한다면 DOM을 직접 조작한다면 30개의 노드를 하나 하나 수정하면 레이아웃 재계산과 30번의 리렌더링을 초래하지만 Virtual DOM을 사용하면 Virtual DOM은 렌더링도 일어나지 않기 때문에 연산 비용이 적어서 연산이 끝나고 최종적인 변화를 실제 DOM에 던져주게 됩니다. 

모든 변화를 하나로 묶어준만큼 레이아웃 계산과 리렌더링의 규모는 커지지만 한 번만 발생하므로 연산의 횟수를 줄일 수 있다는 장점이 있습니다. 이러한 과정은 Virtual DOM 없이 변화를 묶어서 DOM fragment에 적용 후 일반 DOM에 보내면 되지만 이러한 fragment 관리하는 과정을 수동으로 할 필요없이 자동화, 추상화하며 어떤 것이 바뀌었는지 또한 자동으로 할 수 있기 때문에 DOM이 필요하게 됩니다. 

<br>

### 참고 

http://blog.drakejin.me/React-VirtualDOM-And-Repaint-Reflow/

https://velopert.com/3236