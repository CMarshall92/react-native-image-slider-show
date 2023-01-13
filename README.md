# react-native-image-slider-show

A quick and easy slideshow for react native. (Android & iOS)

![GIF](/assets/demo1.gif) ![GIF](/assets/demo2.gif)

---

## Installation with expo

```bash
expo install react-native-image-slider-show --save
```

## Installation

```bash
npm install react-native-image-slider-show --save
```

---

## Usage
```
import Slideshow from 'react-native-image-slider-show';
```

## Autoplay Example

```javascript
import Slideshow from 'react-native-image-slider-show';

const fetchImages = async (callback) => {
  try {
    axios.defaults.baseURL = API_BASE;
    const response = await axios.get('/');
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
}

const SlideshowTest = () => {
  const [dataSource, setDataSource] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  React.useEffect(() => {
    fetchImages((data) => { 
      setDataSource(data.map((url) => ({ url })))
    });  
  }, [])

  React.useEffect(()=>{
    const toggle = setInterval(() => {
      setPosition(
        position === dataSource.length - 1 ? 0 : position + 1
      );
    }, 10000);

    return () => clearInterval(toggle);
  })

  return (
    <Slideshow position={position} dataSource={dataSource} />
  )
}
```

---

## Props

| Property | Type | isRequired? | Default | Description |
| -------- | :--: | :---------: | :-----: | ----------- |
| `dataSource` | bool | required | - | slideshow data |
| `height` | number | optional | 200 | container height |
| `position` | number | optional | - | set position slideshow |
| `scrollEnabled` | bool | optional | true | enable / disable scrolling |
| `overlay` | bool | optional | false | background overlay |
| `indicatorSize` | number | optional | 16 | indicator size |
| `indicatorColor` | string | optional | #CCCCCC |indicator color |
| `indicatorSelectedColor` | string | optional | #FFFFFF | indicator selected color |
| `arrowSize` | number | optional | 16 | arrow size |
| `arrowLeft` | object | optional | - | component arrow left |
| `arrowRight` | object | optional | - | component arrow right |
| `onPress` | func | optional | - | returns an object image and index of image pressed|
| `onPositionChanged` | func | optional | - | called when the current position is changed |
| `containerStyle` | object | optional | - | custom styles for container |
| `titleStyle` | object | - | - | custom styles for title |
| `captionStyle` | object | - | - | custom styles for caption |

## Forked Repo Extended Props

| Property | Type     | isRequired? | Default | Description |
| -------- | :------: | :---------: | :-----: | ----------- |
| `hideSideArrows`    | boolean     | false   | changing this allows you to hide the side arrows |
| `hidePageIndicator` | boolean     | false   | changing this allows you to hide the page indicators |

---

## Data Structure

```javascript
// example data structure

dataSource: [
  {
    title: 'title 1',
    caption: 'caption 1',
    url: 'url 1',
  }, {
    title: 'title 1',
    caption: 'caption 1',
    url: 'url 2',
  },
]
```

| Property  | Type            | Description                          |
| --------- | :-------------: | ------------------------------------ |
| `title`   | string          | title                                |
| `caption` | string          | caption                              |
| `url`     | string / number | image (URL or a local file resource) |

---

## Credits
[react-native-image-slider](https://github.com/CMarshall92/react-native-image-slider-show)

## License
MIT