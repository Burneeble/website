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

2. Create a Post Type named `Screen Images Layouts`.
   Configuration:

   - Plural label: `Screen Images Layouts`
   - Singular label: `Screen Images Layout`
   - Post Type Key: `screen-images-layout`
   - Public: `True`
   - Hierarchical: `False`
   - Advanced Configuration: `True`
     - General
       - Supports: `Title`, `Custom Fields`
     - GraphQL
       - Show in GraphQL: `True`

3. Create the custom fields for the `Screen Images Layouts` post type. Name it `Screen Images Layout Fields`

   Inside the `Project Fields` group, create the following fields:

- Image1
  - Field Type: `Image`
  - Label: `Image 1`
  - Name: `image_1`
  - Required: `True`
- Image2
  - Field Type: `Image`
  - Label: `Image 2`
  - Name: `image_2`
  - Required: `False`
- Image3
  - Field Type: `Image`
  - Label: `Image 3`
  - Name: `image_3`
  - Required: `False`
- Image4
  - Field Type: `Image`
  - Label: `Image 4`
  - Name: `image_4`
  - Required: `False`

Additional settings/configuration:

- Location Rules
  - `Post Type` is equal to `Screen Images Layouts`
- Presentation
  - Style: `Seamless (no metabox)`
- GraphQL
  - Show in GraphQL: `True`

4. Create a Post Type named `Images Layouts`.
   Configuration:

   - Plural label: `Images Layouts`
   - Singular label: `Images Layout`
   - Post Type Key: `images-layouts`
   - Public: `True`
   - Hierarchical: `False`
   - Advanced Configuration: `True`
     - General
       - Supports: `Title`, `Custom Fields`
     - GraphQL
       - Show in GraphQL: `True`

5. Create a Taxonomy named `Images Layouts Values`.
   Configuration:

   - Plural label: `Images Layouts Values`
   - Singular label: `Images Layouts Value`
   - Taxonomy Key: `images-layout-value`
   - Hierarchical: `False`
   - Post Types: `Images Layout`
   - Advanced Configuration: `True`

     - GraphQL
       - Show in GraphQL: `True`
     - Visibility - Metabox: `No Metabox`

   And Insert these values:

   | Name                            | Slug                             |
   | ------------------------------- | -------------------------------- |
   | Figma Image Layout              | figma-image-layout               |
   | Three Images Layout             | three-images-layout              |
   | Two Images Layout               | two-images-layout                |
   | Large Image Layout              | large-image-layout               |
   | Very Large Image Layout         | very-large-image-layout          |
   | One Image Layout                | one-image-layout                 |
   | One Square Image Layout         | one-square-image-layout          |
   | Laptop Image Layout             | laptop-image-layout              |
   | Smartphone Image Layout         | smarthphone-image-layout         |
   | Laptop Smartphone Images Layout | laptop-smarthphone-images-layout |

6. Create the custom fields for the `Images Layout` post type. Name it `Images Layout`

   Inside the `Images Layout` group, create the following fields:

- Images Layout sm
  - Field Type: `Post Object`
  - Field Label: `Images Layout sm`
  - Label: `Images Layout sm`
  - Name: `images_layout_sm`
  - Filter by Post Type: `Screen Images Layout`
  - Return Format: `Post Object`
  - Select Multiple: `True`
- Images Layout md
  - Field Type: `Post Object`
  - Label: `Images Layout md`
  - Name: `images_layout_md`
  - Filter by Post Type: `Screen Images Layout`
  - Return Format: `Post Object`
  - Select Multiple: `True`
- Images Layout xl
  - Field Type: `Post Object`
  - Label: `Images Layout xl`
  - Name: `images_layout_xl`
  - Filter by Post Type: `Screen Images Layout`
  - Return Format: `Post Object`
  - Select Multiple: `True`
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
  - `Post Type` is equal to `Images Layout`
- Presentation
  - Style: `Seamless (no metabox)`
- GraphQL
  - Show in GraphQL: `True`

7. Create a Post Type named `Sections`.
   Configuration:

   - Plural label: `Sections`
   - Singular label: `Section`
   - Post Type Key: `section`
   - Public: `True`
   - Hierarchical: `False`
   - Advanced Configuration: `True`
     - General
       - Supports: `Title`, `Custom Fields`
     - GraphQL
       - Show in GraphQL: `True`

8. Create a Taxonomy named `Section Layouts`.
   Configuration:

   - Plural label: `Section Layouts`
   - Singular label: `Section Layout`
   - Taxonomy Key: `section-layout`
   - Hierarchical: `False`
   - Post Types: `Section`
   - Advanced Configuration: `True`

     - GraphQL
       - Show in GraphQL: `True`
     - Visibility - Metabox: `No Metabox`

   And Insert these values:

   | Name                                                     | Slug                                                     |
   | -------------------------------------------------------- | -------------------------------------------------------- |
   | Figma Layout                                             | figma-layout                                             |
   | Text Center Center Image Background                      | text_center_center-image_background                      |
   | Text Left Center Image Right Center                      | text_left_center-image_right_center                      |
   | Text Left Center Image Right Center Shape Vertical Right | text_left_center-image_right_center-shape_vertical-right |
   | Text Left Start Image Right Center                       | text_left_start-image_right_center                       |
   | Text Left Start Image Right Center Shape Vertical Right  | text_left_start-image_right_center-shape_vertical-right  |
   | Text Right Center Image Left Center                      | text_right_center-image_left_center                      |
   | Text Right Center Image Left Center Shape Vertical Left  | text_right_center-image_left_center-shape_vertical-left  |
   | Text Right Center Shape Horizontal Left                  | text_right_center-shape_horizontal_left                  |
   | Text Right Center Shape Horizontal Right                 | text_right_center-shape_horizontal_right                 |
   | Text Right Center Shape Vertical Left                    | text_right_center-shape_vertical_left                    |
   | Text Right Center Shape Vertical Right                   | text_right_center-shape_vertical_right                   |
   | Text Right Start Shape Horizontal Right                  | text_right_start-shape_horizontal_right                  |
   | Text Right Start Shape Vertical Right                    | text_right_start-shape_vertical_right                    |
   | Text Top Center Full Image Bottom Center                 | text_top_center-full_image_bottom_center                 |
   | Text Top Center Image Bottom Center                      | text_top_center-image_bottom_center                      |
   | Text Top Center Shape Horizontal Bottom                  | text_top_center-shape_horizontal_bottom                  |
   | Text Top Start Full Image Bottom Center                  | text_top_start-full_image_bottom_center                  |
   | Text Top Start Image Bottom Center                       | text_top_start-image_bottom_center                       |
   | Text Top Start Shape Horizontal Bottom                   | text_top_start-shape_horizontal_bottom                   |

9. Create the custom fields for the `Section` post type. Name it `Section Fields`

   Inside the `Section Fields` group, create the following fields:

- Text
  - Field Type: `Text`
  - Label: `Text`
  - Name: `text`
  - Required: `True`
- Images Layout
  - Field Type: `Post Object`
  - Label: `Images Layout`
  - Name: `images_layout`
  - Filter by Post Type: `Images Layout`
  - Return Format: `Post Object`
  - Select Multiple: `True`
- Title
  - Field Type: `Text`
  - Label: `Title`
  - Name: `title`
- Layout
  - Field Type: `Taxonomy`
  - Label: `Layout`
  - Name: `layout`
  - Required: `True`
  - Taxonomy: `Section Layout`
  - Return Value: `Term Object`
  - Save Terms: `True`
  - Create Terms: `True`
- Button text
  - Field Type: `Text`
  - Label: `Button text`
  - Name: `button_text`
- Button Url
  - Field Type: `Text`
  - Label: `Button Url`
  - Name: `url`

Additional settings/configuration:

- Location Rules
  - `Post Type` is equal to `Section`
- Presentation
  - Style: `Seamless (no metabox)`
- GraphQL
  - Show in GraphQL: `True`

10. Create a Post Type named `Project`.
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

11. Create a Taxonomy named `Project Category`.
    Configuration:

- Plural label: `Project Categories`
- Singular label: `Project Category`
- Taxonomy Key: `project_category`
- Hierarchical: `True`
- Post Types: `Project`
- Advanced Configuration: `True`

  - GraphQL
    - Show in GraphQL: `True`
  - Visibility - Metabox: `No Metabox`

And a Taxonomy named `Project Technologies`.
Configuration:

- Plural label: `Project Technologies`
- Singular label: `Project Technology`
- Taxonomy Key: `project-technology`
- Hierarchical: `False`
- Post Types: `Project`
- Advanced Configuration: `True`
  - GraphQL
    - Show in GraphQL: `True`
  - Visibility
    - Metabox: `No Metabox`

12. Create the custom fields for the `Project` post type. Name it `Project Fields`

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
- Category
  - Field Type: `Taxonomy`
  - Label: `Category`
  - Name: `category`
  - Required: `True`
  - Taxonomy: `Project Category`
  - Return Value: `Term Object`
  - Save Terms: `True`
  - Create Terms: `True`
- Sections
  - Field Type: `Post Object`
  - Label: `Sections`
  - Name: `sections`
  - Filter by Post Type: `Section`
  - Return Format: `Post Object`
  - Select Multiple: `True`
- Favicon
  - Field Type: `Image`
  - Label: `Favicon`
  - Name: `favicon`
  - Required: `True`
- Main color
  - Field Type: `Color Picker`
  - Label: `Main color`
  - Name: `main_color`
  - Required: `True`
  - Default Value: `rgba(0,0,0,1)`
  - Enable Transparency: `True`
- Technologies
  - Field Type: `Taxonomy`
  - Label: `Technologies`
  - Name: `technologies`
  - Required: `True`
  - Taxonomy: `Project Technology`
  - Return Value: `Term Object`
  - Save Terms: `True`
  - Create Terms: `True`

13. Create a Post Type named `Skills`.
    Configuration:

- Plural label: `Skills`
- Singular label: `Skill`
- Post Type Key: `skill`
- Public: `True`
- Hierarchical: `False`
- Advanced Configuration: `True`
  - General
    - Supports: `Title`, `Custom Fields`
  - GraphQL
    - Show in GraphQL: `True`

14. Create the custom fields for the `Skills` post type. Name it `Skill Fields`

Inside the `Project Fields` group, create the following fields:

- Description Sm
  - Field Type: `Text`
  - Label: `Description Sm`
  - Name: `description_sm`
  - Required: `True`
- Description Md
  - Field Type: `Text`
  - Label: `Description Md`
  - Name: `description_md`
  - Required: `True`
- Description Xl
  - Field Type: `Text`
  - Label: `Description Xl`
  - Name: `description_xl`
  - Required: `True`
- Extended Title Sm
  - Field Type: `Text`
  - Label: `Extended Title Sm`
  - Name: `extended_title_sm`
  - Required: `True`
- Extended Title Md
  - Field Type: `Text`
  - Label: `Extended Title Md`
  - Name: `extended_title_md`
  - Required: `True`
- Extended Title Xl
  - Field Type: `Text`
  - Label: `Extended Title Xl`
  - Name: `extended_title_xl`
  - Required: `True`
- Labels Sm
  - Field Type: `Text Area`
  - Label: `Labels Sm`
  - Name: `labels_sm`
  - Required: `True`
- Labels Md
  - Field Type: `Text Area`
  - Label: `Labels Md`
  - Name: `labels_md`
  - Required: `True`
- Labels Xl
  - Field Type: `Text Area`
  - Label: `Labels Xl`
  - Name: `labels_xl`
  - Required: `True`

Additional settings/configuration:

- Location Rules
  - `Post Type` is equal to `Skill`
- Presentation
  - Style: `Seamless (no metabox)`
- GraphQL
  - Show in GraphQL: `True`

15. Create a Post Type named `Reviews`.
    Configuration:

- Plural label: `Reviews`
- Singular label: `Review`
- Post Type Key: `review`
- Public: `True`
- Hierarchical: `False`
- Advanced Configuration: `True`
  - General
    - Supports: `Title`, `Custom Fields`
  - GraphQL
    - Show in GraphQL: `True`

16. Create the custom fields for the `Reviews` post type. Name it `Review Fields`

Inside the `Review Fields` group, create the following fields:

- Review
  - Field Type: `Text Area`
  - Label: `Review`
  - Name: `review`
  - Required: `True`
- Country Code
  - Field Type: `Text`
  - Label: `Country Code`
  - Name: `country_code`
  - Required: `True`
- Username
  - Field Type: `Text`
  - Label: `Username`
  - Name: `username`
  - Required: `True`
- User Avatar
  - Field Type: `Image`
  - Label: `User Avatar`
  - Name: `user_Avatar`
  - Required: `True`
- Project url
  - Field Type: `Text`
  - Label: `Project url`
  - Name: `project_url`
  - Required: `True`

Additional settings/configuration:

- Location Rules
  - `Post Type` is equal to `Review`
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

### 5. Yoast SEO settings

We need to disable indexing for custom post types and taxonomies that are not meant to be indexed by search engines.

1. Go to the `Yoast SEO > Settings > Content Types > [Custom Content Type] > Search Appearance` section in the WordPress admin panel.
2. Disable the `Show in search results` option that are not meant to be indexed by search engines.
3. Go to the `Yoast SEO > Settings > Categories & tags > [Taxonomy] > Search Appearance` section in the WordPress admin panel.
4. Disable the `Show in search results` option that are not meant to be indexed by search engines.

## Reverse Proxy Configuration

In order to maintain the existing URLs for the blog section, we need to configure a reverse proxy in the Next.js app. The goal is to redirect requests from the `/blog/**` path to the WordPress installation, and at the same time, maintain the same URL in the browser.

For doing this, we need to:

1. In the WordPress settings, go to the `Settings > General` section and change the `Site Address (URL)` to the URL of the Next.js app (which will act as a reverse proxy, and represents the domain that will be visible in the browser).
2. In the Next.js app, create a custom middleware that will handle the reverse proxy configuration. The middleware will be responsible for redirecting requests from the `/blog/**` path to the WordPress installation.

Tip: Even if the WordPress installation is in a different domain that will never be visible in the URL bar, it is recommended to use a meaningful domain name for the WordPress installation, such as `blog.burneeble.com`, because some internal references in the WordPress installation may use the domain name.

**TODO: Analyze if it is necessary to handle also the wordpress paths for static files and assets, such as `/wp-content/**`and`/wp-includes/**`.**
