const testDom = `
main class="main">
      <section class="tools">
        <div class="size">
          <div class="size__one size__item size_active"></div>
          <div class="size__two size__item"></div>
          <div class="size__three size__item"></div>
          <div class="size__four size__item"></div>
        </div>
        <div class="draw">
          <button class="pencil draw__item draw__item_active"></button>
          <button class="bucket draw__item"></button>
          <button class="eraser draw__item"></button>
          <button class="stroke draw__item"></button>
        </div>
        <div class="color">
          <label class="primary__label label">
            <input type='color' class="color__primary color__item" value="#ff0000"></input>
          </label>
          <label class="secondary__label label">
            <input type='color' class="color__secondary color__item" value="#ff0000"></input>
          </label>
        </div>
      </section>
      <section class="frames">Frames
        <button class="add-frame">Add Frame</button>
        <div class="frame-wrapper">
          <button class="delete-btn">X</button>
          <canvas class="frame-0 frame frame_active" width=128 height=128></canvas>
          <button class="copy-btn">C</button>
        </div>
      </section>
      <section class="field">
        <p>Canvas</p>
        <form class="canvas-size-form">
          <label  class="size-label size-32">
            <input class="size-selection input-32" checked type="radio" name="size" value="32">
            32
          </label>
          <label  class="size-label size-64">
            <input class="size-selection input-64" type="radio" name="size" value="64">
            64
          </label>
          <label  class="size-label size-128">
            <input class="size-selection input-128" type="radio" name="size" value="128">
            128
          </label>
        </form>
        <canvas class="canvas" width="32" height="32"></canvas>
      </section>
      <section class="preview">Preview
        <div class="preview__animation"></div>
        <div class="fps-display">FPS: <span class="fps-value">4</span></div>
        <form class="form__animation-range">
          <input class="fps-slider" type="range" min="1" max="24" value="4">
        </form>
        <button class="export-gif">Generate GIF</button><br>
      </section>
    </main>
`;

export default testDom;
