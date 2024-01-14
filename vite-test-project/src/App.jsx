import {useState} from 'react';
import './App.css'
import Counter from './components/Counter';
import CustomInput from './components/CustomInput';
import Stepper from './components/Stepper';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

const stepperContent = [
  {
    title:'Step 1',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales laoreet tortor, non faucibus nisi vulputate quis. Proin in justo vehicula, euismod velit varius, mattis diam. Donec tempor quam ex, eget blandit dolor hendrerit sit amet. Donec id eleifend augue, at tempor ante. In vitae ligula at ante luctus tempor. Quisque id pretium dolor. Sed ac dignissim arcu. Nullam euismod euismod neque nec convallis. Phasellus feugiat tortor vel nibh consectetur viverra. Cras urna sem, mollis sit amet erat vitae, tincidunt condimentum eros. Aenean quis imperdiet nisl. Nunc pharetra rutrum consectetur. Sed at pellentesque lectus, et bibendum erat. In hac habitasse platea dictumst. Curabitur bibendum ac ligula id auctor. Aliquam sollicitudin varius malesuada. Nunc lectus quam, accumsan ut tortor et, placerat dapibus lacus. Quisque elementum lacus velit, vitae blandit felis blandit ut. Mauris posuere velit a placerat maximus. Etiam porttitor tellus leo, vitae lobortis justo aliquam et. Cras non auctor orci, vitae tincidunt ligula.',
  },
  {
    title:'Step 2',
    content:'Fusce fringilla vulputate consectetur. Integer rhoncus sollicitudin volutpat. Duis sed nisl nec orci tristique tristique. Integer sagittis purus in sapien auctor rutrum. Fusce lobortis tortor sit amet urna ultrices condimentum. Curabitur cursus gravida sem ut facilisis. Suspendisse vitae sapien bibendum, suscipit lorem quis, ultricies velit. Mauris sit amet tellus quis purus commodo sagittis et eu enim. Pellentesque elementum dignissim orci ut hendrerit. Vestibulum elit purus, viverra et nisl eget, mollis accumsan dui. Quisque mauris nibh, dapibus posuere vulputate a, maximus non sem. Duis tincidunt venenatis ex ac pulvinar. In consequat tempus efficitur. Pellentesque id posuere libero. Quisque aliquet vitae eros id vulputate. Nunc dignissim laoreet dolor, congue dignissim ligula iaculis sit amet.',
  },
  {
    title:'Step 3',
    content:'In maximus tortor et tempus vestibulum. Donec ante purus, condimentum vel est ut, bibendum sagittis tellus. In fringilla enim neque, posuere faucibus nulla accumsan id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis orci quis faucibus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper velit lorem.',
  },
  {
    title:'Step 4',
    content:'Vivamus scelerisque felis tortor. Quisque lacus arcu, tincidunt volutpat egestas id, vehicula vitae est. Ut semper tortor nulla, in vestibulum nibh ornare vitae. Curabitur dapibus orci augue, fermentum semper lacus interdum sed. Vivamus nec purus euismod, condimentum massa non, pretium odio. Nam eget tincidunt ex. Maecenas nulla diam, bibendum id sodales cursus, vehicula ac orci. Nullam efficitur ante vel nisi tincidunt ultrices. Etiam ut nulla lorem. Duis sit amet vehicula sapien. Donec ultrices imperdiet dui, eu bibendum enim ullamcorper eget. Duis ac blandit augue. Integer tempus, tortor non venenatis malesuada, eros justo porttitor leo, a laoreet metus lectus vel mauris. Ut ornare elit a orci dapibus tempus. Donec pulvinar magna nisi, sit amet ultrices nisl tempus sit amet. Suspendisse at erat consequat, fermentum lectus eu, rutrum mi.',
  },
  {
    title:'Step 5',
    content:'This is some cool stuff in step 5',
  },
]

const todo = [
  {
    id:'1234',
    name:"My new todo task 1",
    description:"This is the description of a todo task",
    isDone: false
  },
  {
    id:'4123',
    name:"My new todo task 2",
    description:"This is the description of a todo task",
    isDone: true
  },
  {
    id:'4123',
    name:"My new todo task 3",
    description:"This is the description of a todo task",
    isDone: false
  }
]

function App() {
  const [darkMode,setDarkMode] = useState(true);

  const [content, setContent] = useState(stepperContent);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={()=>setDarkMode(!darkMode)}>{darkMode ? <FaRegLightbulb />:<FaLightbulb />}</button>
      {/* <Counter initialValue={-5} darkMode={darkMode}/>
      <Counter initialValue={0} darkMode={darkMode}/>
      <Counter initialValue={5} darkMode={darkMode}/>
      <CustomInput type="text" name="Text"/> 
      <CustomInput type="number" name="Numeric"/> 
      <CustomInput type="date" name="Birth date"/>  */}
      {/* <Stepper content={content}/> */}

      <TodoList darkMode={darkMode}/>
    </div>
  )
}

export default App
