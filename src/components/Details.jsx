import State from 'State.jsx';
import Avatar from 'Avatar.jsx';

export default function Details() {
  return (
    <>
      <State />
      <p>Published 21 Dec 2023</p>
      <p className='title'>HTML & CSS Foundation</p>
      <p className='details'>These languages are the backbone of every website, defining structure, content & presentation.</p>
      <Avatar />
    </>
  )
}