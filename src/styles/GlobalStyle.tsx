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
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding-bottom: 3rem;
        border: 1px solid #957f6a !important;
        border-top: none !important;
        border-radius: 0 0 6px 6px;
      }
      .ql-editor {
        flex-grow: 1;
        & h1 {
          font-size: 2rem;
          line-height: 3rem;
          margin-bottom: 1rem;
        }
        & h2 {
          font-size: 1.5rem;
          line-height: 2.5rem;
          margin-bottom: 1rem;
        }
        & h5 {
          font-size: 1rem;
          line-height: 2rem;
        }
        & p {
          font-size: 1.3rem;
          line-height: 2.3rem;
        }
        & blockquote {
          padding: 0.5rem 1rem !important;
          line-height: 2rem;
          font-size: 1.3rem;
          color: #666;
          background: #fff;
          border-left: 0.5rem solid #045345 !important;
          margin-bottom: 1rem !important;
          &::before,
          &::after {
            color: rgba(#045345, 0.6);
          }
        }
        & strong {
          font-weight: bold;
        }
        & ol {
          display: block;
          list-style-type: decimal;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-inline-start: 40px;
        }
        & ul {
          display: block;
          list-style-type: disc;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-inline-start: 40px;
        }
        & li {
          display: list-item;
          text-align: -webkit-match-parent;
        }

        & img {
          max-width: 100%;
          margin: 0.5rem 0;
        }
      }
    `}
  />
);
export default GlobalStyle;
