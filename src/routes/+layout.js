// @ts-nocheck
/** @type {import('./$types').LayoutLoad} */
// export async function load() {
//     return {};
// }

export const load = ({ url }) => {
    const { pathname } = url
  
    return {
      pathname
    }
}

export const prerender = true;
