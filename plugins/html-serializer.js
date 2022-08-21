/**
 * To learn more about HTML Serializer check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/html-serializer
 */

// import { RichText } from '@prismicio/helpers';
import linkResolver from './link-resolver';

export default {
  paragraph: ({ children }) => `<p class="text-base mb-4">${children}</p>`,
}

// const Elements = RichText.Elements;

// export default function (type, element, content, children) {
//   // Generate links to Prismic Documents as <router-link> components
//   // Present by default, it is recommended to keep this
//   switch (type) {
//     case Elements.hyperlink: {
//       let result = '';
//       const url = prismicDOM.Link.url(element.data, linkResolver);

//       if (element.data.link_type === 'Document') {
//         result = `<nuxt-link to="${url}">${content}</nuxt-link>`;
//       } else {
//         const target = element.data.target
//           ? `target="'${element.data.target}'" rel="noopener"`
//           : '';
//         result = `<a href="${url}" ${target}>${content}</a>`;
//       }
//       return result;
//     }

//     case Elements.image: {
//       let result = `<img src="${element.url}" alt="${element.alt || ''}" copyright="${
//         element.copyright || ''
//       }">`;

//       if (element.linkTo) {
//         const url = prismicDOM.Link.url(element.linkTo, linkResolver);

//         if (element.linkTo.link_type === 'Document') {
//           result = `<nuxt-link to="${url}">${result}</nuxt-link>`;
//         } else {
//           const target = element.linkTo.target
//             ? `target="${element.linkTo.target}" rel="noopener"`
//             : '';
//           result = `<a href="${url}" ${target}>${result}</a>`;
//         }
//       }
//       const wrapperClassList = [element.label || '', 'block-img'];
//       result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`;
//       return result;
//     }

//     case Elements.paragraph: {
//       return '<p class="text-base mb-4">' + children.join('') + '</p>';
//     }
//   }

//   // if (type === Elements.paragraph) {
//   //   return '<p class="text-base mb-4">' + children.join('') + '</p>';
//   // }

//   // Return null to stick with the default behavior for everything else
//   return null;
// }
