# Website package

The app, built in Next.js, acts as a showcase site for Burneeble, and at the same time acts as a gateway for several integrations:

- WordPress Headless integration for managing some content:
  - Portfolio projects
  - Contact us form
- Maintaining existing URLs for the blog section

## Wordpress Setup

This section describes the set of configurations you need to have in your WordPress installation so you can integrate it via Headless into your Burneeble site in Next.js.

### 1. WP Plugins

Install the following plugins through the WordPress admin panel:

- [Advanced Custom Fields (ACF)](https://wordpress.org/plugins/advanced-custom-fields/)
- [WPGraphQL](https://wordpress.org/plugins/wp-graphql/)
- [WPGraphQL for ACF](https://wordpress.org/plugins/wpgraphql-acf/)
- [Contact Form 7](https://wordpress.org/plugins/contact-form-7/)
- [Flamingo](https://wordpress.org/plugins/flamingo/)

Upload the following plugin:

- [WPGraphQL Tax Query](https://github.com/wp-graphql/wp-graphql-tax-query?tab=readme-ov-file)

### 2. ACF Configuration

The next step is to create the custom fields that will be used for handling custom data types required by the Burneeble site, such as Portfolio Projects.

#### 2.1. Portfolio Project data type

The Portfolio Project data type is used to store the information about the projects that will be displayed on the Burneeble site.

1. Enter the ACF settings page in the WordPress admin panel.
2. Create a Post Type named `Project`.
   Configuration:

   - Plural label: `Projects`
   - Singular label: `Project`
   - Post Type Key: `project`
   - Public: `True`
   - Hierarchical: `False`
   - Advanced Configuration: `True`
     - General
       - Supports: `Title`, `Custom Fields`
     - GraphQL
       - Show in GraphQL: `True`

3. Create a Taxonomy named `Project Category`.
   Configuration:

   - Plural label: `Project Categories`
   - Singular label: `Project Category`
   - Taxonomy Key: `project_category`
   - Hierarchical: `True`
   - Post Types: `Project`
   - Advanced Configuration: `True`
     - GraphQL
       - Show in GraphQL: `True`
     - Visibility
       - Metabox: `No Metabox`

4. Create the custom fields for the `Project` post type. Name it `Project Fields`

   Inside the `Project Fields` group, create the following fields:

- Description
  - Field Type: `Text`
  - Label: `Description`
  - Name: `Description`
  - Required: `True`
- Project URL
  - Field Type: `Text`
  - Label: `Project URL`
  - Name: `Project URL`
  - Required: `True`
- Thumbnail
  - Field Type: `Image`
  - Label: `Thumbnail`
  - Name: `Thumbnail`
  - Required: `True`
- Image1
  - Field Type: `Image`
  - Label: `Image1`
  - Name: `Image1`
  - Required: `False`
- Image2
  - Field Type: `Image`
  - Label: `Image2`
  - Name: `Image2`
  - Required: `False`
- Image3
  - Field Type: `Image`
  - Label: `Image3`
  - Name: `Image3`
  - Required: `False`
- Category
  - Field Type: `Taxonomy`
  - Label: `Category`
  - Name: `category`
  - Required: `True`
  - Taxonomy: `Project Category`
  - Return Value: `Term Object`
  - Save Terms: `True`
  - Create Terms: `True`

Additional settings/configuration:

- Location Rules
  - `Post Type` is equal to `Project`
- Presentation
  - Style: `Seamless (no metabox)`
- GraphQL
  - Show in GraphQL: `True`

### 3. Contact Form 7 & Flamingo check

The Contact Form 7 plugin is used to manage the contact form on the Burneeble site. The Flamingo plugin is used to store the form submissions in the WordPress database.

These plugins do not require any additional configuration, so it's just about checking if they are working properly.

For doing this, submit a `POST` request to the `/wp-json/contact-form-7/v1/contact-forms/{form_id}/feedback` endpoint, where `{form_id}` is the ID of the form you want to submit (the form id is numerical), and with the following payload as Form Data:

```
your-name:John Doe
your-email:johndoe@example.com
your-subject:Hey!
your-message:Message content text
_wpcf7_unit_tag:wpcf7-f20-o1
```

If everything is working properly, you should receive a `200 OK` and you should see the form submission in the Flamingo plugin through the WordPress admin panel.

### 4. GraphQL settings

- Check `Enable Public Introspection`

## Reverse Proxy Configuration

In order to maintain the existing URLs for the blog section, we need to configure a reverse proxy in the Next.js app. The goal is to redirect requests from the `/blog/**` path to the WordPress installation, and at the same time, maintain the same URL in the browser.

For doing this, we need to:

1. In the WordPress settings, go to the `Settings > General` section and change the `Site Address (URL)` to the URL of the Next.js app (which will act as a reverse proxy, and represents the domain that will be visible in the browser).
2. In the Next.js app, create a custom middleware that will handle the reverse proxy configuration. The middleware will be responsible for redirecting requests from the `/blog/**` path to the WordPress installation.

Tip: Even if the WordPress installation is in a different domain that will never be visible in the URL bar, it is recommended to use a meaningful domain name for the WordPress installation, such as `blog.burneeble.com`, because some internal references in the WordPress installation may use the domain name.

**TODO: Analyze if it is necessary to handle also the wordpress paths for static files and assets, such as `/wp-content/**`and`/wp-includes/**`.**
