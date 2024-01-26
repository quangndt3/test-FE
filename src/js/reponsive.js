export const showMenuReponsive = () => {
    const bodyElement = document.querySelector('body');
    bodyElement?.classList.toggle('max-xl:overflow-hidden');
    const overlay_menu_homepage = document.querySelector('.overlay-menu-homepage');
    overlay_menu_homepage?.classList.toggle('!opacity-[0.15]');
    overlay_menu_homepage?.classList.toggle('!visible');

    const header_menu = document.querySelector('.header-menu');
    header_menu?.classList.toggle('max-xl:translate-x-[0%]');
 };

export  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 export const showUserTag = () => {
    const bodyElement = document.querySelector('body');
    bodyElement?.classList.toggle('overflow-hidden');
    const overlay_user_tag_mobile = document.querySelector('.overlay-user-tag-mobile');
    overlay_user_tag_mobile?.classList.toggle('!opacity-[0.15]');
    overlay_user_tag_mobile?.classList.toggle('!visible');
    const user_tag_mobile_content = document.querySelector('.user-tag-mobile-content');
    user_tag_mobile_content?.classList.toggle('max-xl:translate-x-[0%]');
 };
 export const showSudMenuFooter = (selecter, afterSelecter, beforeSelecter) => {
   const ft_cate = document.querySelector(selecter);
   ft_cate?.classList.toggle('max-lg:!h-[247px]');
   const afterSelecterElement = document.querySelector(afterSelecter);
   afterSelecterElement?.classList.toggle('hidden');
   const beforeSelecterElement = document.querySelector(beforeSelecter);
   beforeSelecterElement?.classList.toggle('hidden');
};