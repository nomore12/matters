import { navSlice } from 'feature/navSlice';

export function getActions(curr) {
  switch (curr) {
    case 'ABOUT':
      return navSlice.actions.about;
    case 'PROJECT':
      return navSlice.actions.project;
    case 'CONTACT':
      return navSlice.actions.contact;
    case 'MATTERS':
      return navSlice.actions.matters;
    case 'CATEGORY':
      return navSlice.actions.setCategory;
    default:
      return navSlice.actions.landing;
  }
}
