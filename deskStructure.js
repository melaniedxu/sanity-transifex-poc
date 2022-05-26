import S from '@sanity/desk-tool/structure-builder';
//...your other desk structure imports...
import {
    TranslationTab,
    defaultDocumentLevelConfig,
    defaultFieldLevelConfig,
} from 'sanity-plugin-transifex';

export default () => S.list().title('Base').items(S.documentTypeListItems());

export const getDefaultDocumentNode = (props) => {
    const translatableComponents = ['movie', 'screening'];
    if (translatableComponents.includes(props.schemaType)) {
        // if (props.schemaType === 'disclaimer') {
        console.log('got');
        return S.document().views([
            S.view.form(),
            //...my other views -- for example, live preview, the i18n plugin, etc.,
            S.view
                .component(TranslationTab)
                .title('Transifex')
                .options(defaultDocumentLevelConfig),
        ]);
    }
    return S.document();
};
