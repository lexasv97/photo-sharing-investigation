// need to continue

document.addEventListener('keyup', (event) => {
  if (event.key === 'PrintScreen' || (event.key === '4' && event.ctrlKey && event.shiftKey)) {
    //blur picture or close etc
      console.log('Screenshot detected!');
  }
});

// -----------------------------------------

const ExpirementOne = () => {
  return (
    <div>ExpirementOne</div>
  )
}

export default ExpirementOne