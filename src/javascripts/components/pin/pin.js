import './pin.scss';

const pinMaker = (pin) => {
  const domString = `
  <div id="${pin.id}" class="card">
  <img class"card-img-top" src"${pin.imgUrl}" alt="card image">
    <div class="card-body">
      <a class="card-text" href=${pin.webUrl}>Source</a>
      <div><i type="button"></i></div>
    </div>
  </div>`;
  return domString;
};

export default { pinMaker };
