import paginationTemplate from './pagination.html';

/* @ngInject */
export default function(paginationTemplateProvider){
    paginationTemplateProvider.setString(paginationTemplate);
}