/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
<React.Fragment>
  <path d="M344 80.15h-8a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h8a24 24 0 1 0 0-48zm0 32v-16a8 8 0 0 1 0 16z"/><path d="M344 160.15h-8a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h8a24 24 0 1 0 0-48zm0 32v-16a8 8 0 0 1 0 16z"/><path d="M384.4 144.15c8.71-7.14 15.6-20.28 15.6-44a52 52 0 0 0-48-51.8v-16.2h-16v16h-16v-16h-16v16h-16a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h8v96h-8a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h24v16h16v-16h8v16h16v-16.2a52 52 0 0 0 48-51.8c0-23.72-6.89-36.86-15.6-44zm-24.4 8c6.56 0 24 0 24 36a36.04 36.04 0 0 1-36 36h-52v-16h8a8 8 0 0 0 8-8v-112a8 8 0 0 0-8-8h-8v-16h52a36.04 36.04 0 0 1 36 36c0 36-17.44 36-24 36a8 8 0 0 0 0 16z"/><path d="M384.52 8.48A144 144 0 0 0 336 .15a142.9 142.9 0 0 0-65.11 15.74A55.75 55.75 0 0 0 232 .15H56a56.06 56.06 0 0 0-56 56v368a56.06 56.06 0 0 0 56 56h176a56.06 56.06 0 0 0 56-56V279.82c74.93 26.66 157.28-12.48 183.93-87.41 26.66-74.93-12.48-157.28-87.41-183.93zM16 56.15a40.05 40.05 0 0 1 40-40h176a39.8 39.8 0 0 1 24.23 8.2 145.13 145.13 0 0 0-39.88 39.8H16v-8zm216 408H56a40.05 40.05 0 0 1-40-40h256a40.05 40.05 0 0 1-40 40zm40-56H16v-328h191.2a142.72 142.72 0 0 0-14.25 48H64a8 8 0 0 0-8 8v216a8 8 0 0 0 13 6.25l35-28 35 28a8 8 0 0 0 10 0l35-28 35 28a8 8 0 0 0 13-6.25v-104h4.42A143.93 143.93 0 0 0 272 273.12v135.03zM146.3 245.78a8 8 0 0 0 5.7 2.37h64v87.35l-27-21.6a8 8 0 0 0-10 0l-35 28-35-28a8 8 0 0 0-10 0l-27 21.6V144.15h120c0 13.26 1.84 26.45 5.46 39.2l-51.12 51.12a8 8 0 0 0-.04 11.31zm228.8 20.25a127.97 127.97 0 0 1-39.1 6.12c-34.04.09-66.7-13.47-90.66-37.65a8 8 0 0 0-5.66-2.35h-68.37l40.85-40.8a8 8 0 0 0 1.96-8.1c-21.6-67.31 15.46-139.39 82.78-160.98C364.2.67 436.29 37.73 457.88 105.04c21.6 67.32-15.46 139.4-82.77 160.99z"/><path d="M88 160.15h56v16H88z"/><path d="M88 192.15h64v16H88z"/>
</React.Fragment>
    ),
    viewBox: `0 0 480.3 480.3`,
  },
  circle: {
    shape: (
      <React.Fragment>
        <path d="M384 128.2h-14.5a87 87 0 0 0-122.9-24.5A88 88 0 1 0 83 130.6a40 40 0 0 0-27 37.6v272c.1 22 18 40 40 40h288c22.2 0 40-18 40-40v-272c0-22.1-17.8-40-40-40zm-88-24a72 72 0 0 1 68 96h-17.4a55.8 55.8 0 0 0-81.5-70.7 55.8 55.8 0 0 0-19.6 70.7h-17.3a72 72 0 0 1 67.8-96zm33.6 93.4c-.5.9-1.2 1.7-1.8 2.6h-63.4a39.7 39.7 0 0 1 9.6-57.4 40.6 40.6 0 0 1 44.2 0 39.6 39.6 0 0 1 11.4 54.8zM160.1 16.2a72 72 0 1 1 0 144 72 72 0 0 1 0-144zm-88 152a24 24 0 0 1 20.5-23.7 87.8 87.8 0 0 0 117 16.3 87.2 87.2 0 0 0 2 39.3H96a24 24 0 0 1-24-24v-8zm104 184a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm232-8H272a24 24 0 1 1 0-48h136v48zm0-64H272a40 40 0 0 0 0 80h136v80a24 24 0 0 1-24 24H224v-36l26.6-20h14.9a24 24 0 1 0 0-16H248a8 8 0 0 0-4.8 1.6l-32 24a8 8 0 0 0-3.2 6.4v40h-24v-97.5a24 24 0 1 0-16 0v97.5h-24v-64a8 8 0 0 0-2.4-5.7l-21.6-21.7v-38.1a24 24 0 1 0-16 0v41.5a8 8 0 0 0 2.3 5.6l21.7 21.7v60.7H96a24 24 0 0 1-24-24V208a39.6 39.6 0 0 0 24 8.2h288c8.7 0 17.1-3 24-8.2v72.2zm-128 120a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm-168-80a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm296-144a24 24 0 0 1-24 24h-3.5a85.7 85.7 0 0 0-2.7-56h6.2a24 24 0 0 1 24 24v8z"/><path d="M160 32.2a56 56 0 1 0 0 112 56 56 0 0 0 0-112zm0 96a40 40 0 1 1 0-80 40 40 0 0 1 0 80z"/><path d="M264.1.2h16v16h-16z"/><path d="M264.1 32.2h16v40h-16z"/><path d="M296.1.2h16v16h-16z"/><path d="M296.1 32.2h16v40h-16z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 480.2 480.2`,
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M441.66 223.03L399.3 180.7V8a8 8 0 0 0-8-8h-304a8 8 0 0 0-8 8v40h-40a8 8 0 0 0-8 8v416a8 8 0 0 0 8 8h304a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V299.31l42.35-42.34a24 24 0 0 0 0-33.94zM95.3 16h288v148.86a23.9 23.9 0 0 0-32 0V56a8 8 0 0 0-8-8h-248V16zm-48 448V64h288v116.69l-58.34 58.34a24 24 0 0 0 0 33.94L280 276l-28.69 28.69-3.03-3.03a24 24 0 0 0-33.93 0l-73.38 73.37a24 24 0 0 0 0 33.94L196 464H47.31zm311.04-197.66a8 8 0 0 1 0 11.32l-32.7 32.68-71.3 71.32-1.38 1.37a8 8 0 0 1-11.31 0l-17.38-17.37a8 8 0 0 1 0-11.32l72.7-72.68 31.3-31.32 1.38-1.37a8 8 0 0 1 11.31 0l17.38 17.37zm-12.76-33.3l16.07-16.07a8 8 0 0 1 11.31 0l17.38 17.37a8 8 0 0 1 0 11.32l-16.08 16.07a23.77 23.77 0 0 0-4.61-6.7l-17.38-17.37a23.78 23.78 0 0 0-6.7-4.62zM237.04 398.96l-16.07 16.07a8 8 0 0 1-11.31 0l-17.38-17.37a8 8 0 0 1 0-11.32l16.07-16.07a23.77 23.77 0 0 0 4.62 6.7l17.38 17.37a23.77 23.77 0 0 0 6.7 4.62zm-27.38 56.07l-57.38-57.37a8 8 0 0 1 0-11.32l73.38-73.37a8 8 0 0 1 11.31 0L240 316l-27.03 27.03-32 32a24 24 0 0 0 0 33.94l17.38 17.37a24 24 0 0 0 33.93 0l32-32 1.38-1.37 25.65-25.66 3.04 3.03a8 8 0 0 1 0 11.32l-73.38 73.37a8 8 0 0 1-11.31 0zM335.32 464h-100.7l71.04-71.03a24 24 0 0 0 0-33.94l-3.03-3.03 28.69-28.69 3.03 3.03c.3.3.65.52.96.8V464zm48-48h-32v-78.64a23.9 23.9 0 0 0 16.96-7.02l15.04-15.03V416zm47.03-170.34l-73.38 73.37a8 8 0 0 1-11.31 0l-3.03-3.03 27.03-27.03 32-32a24 24 0 0 0 0-33.94l-17.38-17.37a24 24 0 0 0-33.93 0l-32 32-1.38 1.37-25.65 25.66-3.04-3.03a8 8 0 0 1 0-11.32l73.38-73.37a8 8 0 0 1 11.31 0l57.38 57.37a8 8 0 0 1 0 11.32z"/><path d="M71.31 88h240v16h-240z"/><path d="M71.31 128h240v16h-240z"/><path d="M71.31 168h240v16h-240z"/><path d="M71.31 208h192v16h-192z"/><path d="M71.31 248h168v16h-168z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 480 480`,
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M480 152V64c0-41.77-150.4-48-240-48S0 22.23 0 64v88c.7 8.37 5.5 15.86 12.8 20A24.9 24.9 0 0 0 0 192v88c.7 8.37 5.5 15.86 12.8 20A24.9 24.9 0 0 0 0 320v88c0 44.3 157 56 240 56s240-11.7 240-56v-88a24.9 24.9 0 0 0-12.8-20 25.42 25.42 0 0 0 12.8-20v-88a24.9 24.9 0 0 0-12.8-20 25.42 25.42 0 0 0 12.8-20zm-16 256c0 13.6-79.06 40-224 40S16 421.6 16 408v-65.82C58.02 368.38 173.05 376 240 376s181.98-7.62 224-33.82V408zm-224-48c-144.94 0-224-26.4-224-40 0-1.8 2.94-6.02 13.17-11.14C78.5 329.69 179.12 336 240 336s161.49-6.31 210.83-27.14C461.06 313.98 464 318.2 464 320c0 13.6-79.06 40-224 40zm224-80c0 13.6-79.06 40-224 40S16 293.6 16 280v-65.82C58.02 240.38 173.05 248 240 248s181.98-7.62 224-33.82V280zm-224-48c-144.94 0-224-26.4-224-40 0-1.8 2.94-6.02 13.17-11.14C78.5 201.69 179.12 208 240 208s161.49-6.31 210.83-27.14C461.06 185.98 464 190.2 464 192c0 13.6-79.06 40-224 40zm224-80c0 13.6-79.06 40-224 40S16 165.6 16 152V86.18C58.02 112.38 173.05 120 240 120s181.98-7.62 224-33.82V152zm-224-48C95.06 104 16 77.6 16 64c0-10.4 54.75-32 224-32s224 21.6 224 32c0 13.6-79.06 40-224 40z"/><path d="M208 144h64v16h-64z"/><path d="M208 272h64v16h-64z"/><path d="M208 400h64v16h-64z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 480 480`,
  },
  box: {
    shape: (
      <React.Fragment>
        <path d="M240 128c-61.86 0-112 50.14-112 112 .07 61.83 50.17 111.93 112 112 61.86 0 112-50.14 112-112s-50.14-112-112-112zm83.25 64.4a94.95 94.95 0 0 1 12.34 39.6h-39.78a213.92 213.92 0 0 0-3.92-34.75 334.3 334.3 0 0 0 31.36-4.85zm-10.03-14.34a342.94 342.94 0 0 1-25.27 3.54 117.2 117.2 0 0 0-14.16-31.34 96.29 96.29 0 0 1 39.43 27.8zM200.18 232a196.66 196.66 0 0 1 3.94-33.27 502.43 502.43 0 0 0 71.76 0 196.66 196.66 0 0 1 3.94 33.27h-79.64zm79.64 16a196.76 196.76 0 0 1-3.94 33.27 502.43 502.43 0 0 0-71.76 0 196.66 196.66 0 0 1-3.94-33.27h79.64zM240 144c11.53 0 23.84 14.7 31.71 38.96A492.1 492.1 0 0 1 240 184a492.1 492.1 0 0 1-31.71-1.04C216.16 158.7 228.47 144 240 144zm-33.8 6.26a117.2 117.2 0 0 0-14.15 31.34 342.94 342.94 0 0 1-25.27-3.54 96.29 96.29 0 0 1 39.43-27.8zm-49.45 42.14c9.6 2 20.15 3.62 31.36 4.85A213.92 213.92 0 0 0 184.2 232h-39.78a94.95 94.95 0 0 1 12.34-39.6zm0 95.2a94.95 94.95 0 0 1-12.34-39.6h39.78c.36 11.67 1.67 23.3 3.92 34.75a334.3 334.3 0 0 0-31.36 4.85zm10.03 14.34c7.9-1.42 16.36-2.61 25.27-3.54a117.2 117.2 0 0 0 14.16 31.34 96.29 96.29 0 0 1-39.43-27.8zM240 336c-11.53 0-23.84-14.7-31.71-38.96A492.1 492.1 0 0 1 240 296c10.82 0 21.45.38 31.71 1.04C263.84 321.3 251.53 336 240 336zm33.8-6.26c6.23-9.7 11-20.25 14.15-31.34 8.91.93 17.37 2.12 25.27 3.54a96.29 96.29 0 0 1-39.43 27.8zm49.45-42.14c-9.6-2-20.15-3.62-31.36-4.85A213.92 213.92 0 0 0 295.8 248h39.78a94.95 94.95 0 0 1-12.34 39.6z"/><path d="M96 304H24a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h72a24 24 0 0 0 24-24V328a24 24 0 0 0-24-24zm8 152a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-8h88v8zm0-24H16v-80h88v80zm0-96H16v-8a8 8 0 0 1 8-8h72a8 8 0 0 1 8 8v8z"/><path d="M456 0h-72a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h72a24 24 0 0 0 24-24V24a24 24 0 0 0-24-24zm8 152a8 8 0 0 1-8 8h-72a8 8 0 0 1-8-8v-8h88v8zm0-24h-88V48h88v80zm0-96h-88v-8a8 8 0 0 1 8-8h72a8 8 0 0 1 8 8v8z"/><path d="M336.84 433.12c-4.58 2.3-9.3 4.46-14 6.4l6.15 14.8c5.06-2.1 10.12-4.42 15.05-6.9l-7.2-14.3z"/><path d="M308.43 444.93c-4.87 1.6-9.85 3.08-14.79 4.35l3.96 15.52a229.6 229.6 0 0 0 15.9-4.67l-5.07-15.2z"/><path d="M278.58 452.57c-5.01.9-10.15 1.64-15.25 2.18l1.7 15.91c5.48-.59 11-1.37 16.4-2.35l-2.85-15.74z"/><path d="M471.85 231.5l-16 .56a206.3 206.3 0 0 1 .02 15.44l16 .56c.13-2.68.13-5.36.13-8.06 0-2.85-.05-5.68-.15-8.5z"/><path d="M439.69 322.5c-1.95 4.7-4.1 9.43-6.41 14.04l14.31 7.15c2.47-4.95 4.8-10.03 6.88-15.08l-14.78-6.11z"/><path d="M201.83 452.64l-2.8 15.75c5.41.96 10.93 1.75 16.4 2.32l1.68-15.91a217.3 217.3 0 0 1-15.28-2.16z"/><path d="M449.4 293.2c-1.26 4.98-2.72 10-4.33 14.8l15.2 5.02a235.75 235.75 0 0 0 4.64-15.9l-15.51-3.92z"/><path d="M454.8 262.89a222.78 222.78 0 0 1-2.15 15.28l15.74 2.79c.97-5.42 1.75-10.94 2.32-16.4l-15.91-1.67z"/><path d="M468.31 198.58l-15.74 2.84c.91 5.07 1.65 10.2 2.18 15.25l15.91-1.69a227.48 227.48 0 0 0-2.35-16.4z"/><path d="M171.95 445.06l-5.04 15.2c5.21 1.72 10.56 3.28 15.91 4.64l3.93-15.5a215.24 215.24 0 0 1-14.8-4.34z"/><path d="M363.32 417.36c-4.2 2.93-8.56 5.74-12.95 8.35l8.18 13.75c4.72-2.8 9.4-5.86 13.92-8.97l-9.15-13.13z"/><path d="M143.47 433.29l-7.2 14.3c4.94 2.46 10.01 4.78 15.11 6.89l6.12-14.8a211.42 211.42 0 0 1-14.03-6.4z"/><path d="M247.94 455.85c-5.12.18-10.3.2-15.44 0l-.55 16.01a231.08 231.08 0 0 0 16.56-.02l-.57-16z"/><path d="M408.3 375.4a218.36 218.36 0 0 1-10.1 11.66l11.7 10.92c3.73-4 7.38-8.22 10.85-12.53L408.3 375.4z"/><path d="M387.3 397.98a215.9 215.9 0 0 1-11.64 10.12l10.04 12.44c4.3-3.46 8.5-7.1 12.5-10.85l-10.9-11.7z"/><path d="M425.89 350.08a216.7 216.7 0 0 1-8.35 12.98l13.15 9.12c3.14-4.52 6.15-9.21 8.96-13.93l-13.76-8.17z"/><path d="M36.3 128.87c-2.64 4.81-5.1 9.8-7.43 14.83l14.55 6.64c2.14-4.68 4.47-9.32 6.92-13.79l-14.04-7.68z"/><path d="M75.9 76c-3.88 3.89-7.68 8-11.28 12.12l12.1 10.48A222.4 222.4 0 0 1 87.2 87.31L75.9 76z"/><path d="M22.53 159a235.17 235.17 0 0 0-5.22 15.74l15.35 4.5a213.1 213.1 0 0 1 4.86-14.63l-15-5.6z"/><path d="M8.57 223.58C8.19 229.03 8 234.56 8 240v.11l16-.11c0-5.07.18-10.22.53-15.31l-15.96-1.11z"/><path d="M305.27 17.31l-4.47 15.35c4.9 1.44 9.83 3.08 14.63 4.87l5.6-15a237.45 237.45 0 0 0-15.76-5.22z"/><path d="M54.22 101c-3.3 4.42-6.48 9-9.42 13.62l13.42 8.66c2.77-4.3 5.73-8.57 8.8-12.67l-12.8-9.6z"/><path d="M13.22 190.78a239.73 239.73 0 0 0-2.9 16.32l15.84 2.25c.71-5.05 1.6-10.16 2.7-15.2l-15.64-3.37z"/><path d="M100.9 54.3c-4.39 3.3-8.72 6.8-12.88 10.4L98.5 76.8c3.9-3.37 7.9-6.63 12-9.7l-9.6-12.8z"/><path d="M223.33 8.6c-5.47.38-11.01.98-16.47 1.75l2.27 15.84c5.08-.73 10.24-1.28 15.33-1.64L223.33 8.6z"/><path d="M240 8h-.13l.13 16a223 223 0 0 1 15.31.53l1.1-15.96C250.97 8.19 245.45 8 240 8z"/><path d="M272.9 10.31l-2.25 15.85c5.05.71 10.16 1.6 15.2 2.7l3.37-15.64a234.89 234.89 0 0 0-16.32-2.9z"/><path d="M24.58 255.53L8.6 256.66c.39 5.48.98 11.01 1.76 16.48l15.83-2.27a203.12 203.12 0 0 1-1.6-15.34z"/><path d="M190.55 13.28a232.25 232.25 0 0 0-16.05 4.1l4.5 15.35c4.93-1.44 9.95-2.73 14.95-3.82l-3.4-15.63z"/><path d="M158.8 22.62a229.44 229.44 0 0 0-15.3 6.34l6.67 14.54c4.65-2.12 9.43-4.1 14.22-5.9l-5.6-14.98z"/><path d="M128.75 36.38a220.77 220.77 0 0 0-14.26 8.47l8.71 13.45c4.3-2.77 8.74-5.42 13.24-7.88l-7.69-14.04z"/>
</React.Fragment>
    ),
    viewBox: `0 0 480 480`,
  },
  hexa: {
    shape: (
			<React.Fragment>
        <path d="M447.904 151.952a8 8 0 0 0 8-8v-56h16a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8h-336a8 8 0 0 0-8 8v56h-16a8 8 0 0 0-8 8v55.464C15.242 175.258-24.334 279.43 15.507 368.092c28.381 63.157 91.156 103.805 160.396 103.86h296a8 8 0 0 0 8-8v-128a8 8 0 0 0-8-8h-24v-48h24a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8h-40v-48h16.001zm-16-128h32v48h-32v-48zm-48 0h32v48h-32v-48zm16 256h32v48h-32v-48zm-16-16v-48h32v48h-32zm32-64h-32v-48h32v48zm-24-64h-32v-48h32v48zm-72 16v42.992a177.545 177.545 0 0 0-42.992-42.992h42.992zm-56-16v-48h32v48h-32zm48 0v-48h32v48h-32zm56 16v48h-32v-48h32zm0 64v48h-18.968a174.719 174.719 0 0 0-16.344-48h35.312zm-16 80c0-5.4-.28-10.728-.76-16h32.76v48h-34.968a176.624 176.624 0 0 0 2.968-32zm-16-272h32v48h-32v-48zm-48 0h32v48h-32v-48zm-48 0h32v48h-32v-48zm8 64v47.464a174.387 174.387 0 0 0-32-10.824v-36.64h32zm-56-64h32v48h-32v-48zm8 64v33.68a175.973 175.973 0 0 0-24-1.68c-2.68 0-5.344.08-8 .2v-32.2h32zm-56-64h32v48h-32v-48zm-24 64h32v33.68a175.002 175.002 0 0 0-32 7.504V87.952zm-104 208c0-88.366 71.634-160 160-160s160 71.634 160 160-71.634 160-160 160c-88.324-.102-159.899-71.677-160-160zm256 160h-22.816a175.969 175.969 0 0 0 22.816-12.6v12.6zm48 0h-32v-24.336a177.74 177.74 0 0 0 23.664-23.664h8.336v48zm48 0h-32v-48h32v48zm0-64h-44.6a175.147 175.147 0 0 0 21.888-48h22.712v48zm48 64h-32v-48h32v48zm0-64h-32v-48h32v48zm48 64h-32v-48h32v48zm0-112v48h-32v-48h32zm0-128v48h-32v-48h32zm-56-80v-48h32v48h-32z"/><path d="M183.904 231.952h-8a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h8c13.255 0 24-10.745 24-24s-10.746-24-24-24zm0 32v-16a8 8 0 0 1 0 16z"/><path d="M183.904 311.952h-8a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h8c13.255 0 24-10.745 24-24s-10.746-24-24-24zm0 32v-16a8 8 0 0 1 0 16z"/><path d="M224.304 295.952c8.712-7.136 15.6-20.28 15.6-44-.024-27.15-20.931-49.712-48-51.8v-16.2h-16v16h-16v-16h-16v16h-16a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h8v96h-8a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h24v16h16v-16h8v16h16v-16.2c27.069-2.088 47.976-24.65 48-51.8 0-23.72-6.888-36.864-15.6-44zm-24.4 8c6.56 0 24 0 24 36-.022 19.873-16.127 35.978-36 36h-52v-16h8a8 8 0 0 0 8-8v-112a8 8 0 0 0-8-8h-8v-16h52c19.873.022 35.978 16.127 36 36 0 36-17.44 36-24 36a8 8 0 0 0 0 16z"/><path d="M175.904 151.952c-79.529 0-144 64.471-144 144s64.471 144 144 144 144-64.471 144-144c-.093-79.491-64.51-143.908-144-144zm0 272c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128c-.084 70.657-57.343 127.916-128 128z"/>
			</React.Fragment>
    ),
    viewBox: `0 0 479.9 479.9`,
  },
  cross: {
    shape: (
			<React.Fragment>
        <path d="M200 432h-16v-88a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v88H8a8 8 0 0 0-8 8 40.05 40.05 0 0 0 40 40h128a40.05 40.05 0 0 0 40-40 8 8 0 0 0-8-8zM40 352h128v80h-8v-64a8 8 0 0 0-8-8H56a8 8 0 0 0-8 8v64h-8v-80zm104 24v56H64v-56h80zm24 88H40a24.05 24.05 0 0 1-22.63-16h173.26A24.05 24.05 0 0 1 168 464z"/><path d="M200 96h-16V8a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v88H8a8 8 0 0 0-8 8 40.05 40.05 0 0 0 40 40h128a40.05 40.05 0 0 0 40-40 8 8 0 0 0-8-8zM40 16h128v80h-8V32a8 8 0 0 0-8-8H56a8 8 0 0 0-8 8v64h-8V16zm104 24v56H64V40h80zm24 88H40a24.05 24.05 0 0 1-22.63-16h173.26A24.05 24.05 0 0 1 168 128z"/><path d="M472 432h-16v-88a8 8 0 0 0-8-8H304a8 8 0 0 0-8 8v88h-16a8 8 0 0 0-8 8 40.05 40.05 0 0 0 40 40h128a40.05 40.05 0 0 0 40-40 8 8 0 0 0-8-8zm-160-80h128v80h-8v-64a8 8 0 0 0-8-8h-96a8 8 0 0 0-8 8v64h-8v-80zm104 24v56h-80v-56h80zm24 88H312a24.05 24.05 0 0 1-22.63-16h173.26A24.05 24.05 0 0 1 440 464z"/><path d="M472 96h-16V8a8 8 0 0 0-8-8H304a8 8 0 0 0-8 8v88h-16a8 8 0 0 0-8 8 40.05 40.05 0 0 0 40 40h128a40.05 40.05 0 0 0 40-40 8 8 0 0 0-8-8zM312 16h128v80h-8V32a8 8 0 0 0-8-8h-96a8 8 0 0 0-8 8v64h-8V16zm104 24v56h-80V40h80zm24 88H312a24.05 24.05 0 0 1-22.63-16h173.26A24.05 24.05 0 0 1 440 128z"/><path d="M320 256h-20.32a47.93 47.93 0 1 0-71.13-64.26l-.23.26H160a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-152-48h50.8a47.82 47.82 0 0 0-2.8 16h-48v-16zm0 32h50.8a48.06 48.06 0 0 0 9.52 16H168v-16zm64 48h-64v-16h64v16zm0-64a32 32 0 1 1 64 0 32 32 0 0 1-64 0zm80 64h-64v-16h64v16z"/><path d="M200 40h16v16h-16z"/><path d="M264 40h16v16h-16z"/><path d="M232 40h16v16h-16z"/><path d="M88 168h16v16H88z"/><path d="M88 200h16v16H88z"/><path d="M88 296h16v16H88z"/><path d="M88 232h16v16H88z"/><path d="M88 264h16v16H88z"/><path d="M200 376h16v16h-16z"/><path d="M232 376h16v16h-16z"/><path d="M264 376h16v16h-16z"/><path d="M368 264h16v16h-16z"/><path d="M368 232h16v16h-16z"/><path d="M368 200h16v16h-16z"/><path d="M368 168h16v16h-16z"/><path d="M368 296h16v16h-16z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 480 480`,
  },
}

// TODO: https://github.com/typescript-eslint/typescript-eslint/pull/762 Change quotes setup so that type can also use double quotes
// eslint-disable-next-line
type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross"

type SVGProps = {
  stroke?: boolean
  color?: string
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const defaultProps = {
  stroke: false,
  hiddenMobile: false,
}

const SVG = ({ stroke, color, width, icon, left, top, hiddenMobile }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG

SVG.defaultProps = defaultProps