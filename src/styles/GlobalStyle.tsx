import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      /* http://meyerweb.com/eric/tools/css/reset/ 
            v2.0 | 20110126
            License: none (public domain)
            */
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      input,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      textarea,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        box-sizing: border-box;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      html {
        font-size: 62.5%; // 10px
        @media (max-width: 768px) {
          // 태블릿
          font-size: 50%; // 8px
        }
        @media (max-width: 480px) {
          // 모바일
          font-size: 25%; // 4px
        }
      }
      body {
        line-height: 1;
        font-size: 1.6rem;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      .ql-toolbar {
        position: sticky;
        z-index: 50;
        border: 1px solid #957f6a !important;
        border-radius: 6px 6px 0 0;
      }
      .ql-container {
        overflow-y: scroll;
        padding-bottom: 3rem;
        border: 1px solid #957f6a !important;
        border-top: none !important;
      }
    `}
  />
);
export default GlobalStyle;
