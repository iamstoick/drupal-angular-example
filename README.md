drupal-angular-example
======================

A simple modules that uses Angularjs to display article content type.

##Installation

1. Install `Angularify` module.
2. Revert json_article feature. `drush fr json_article -y`

##Notes

1. Make sure that you have contents on your `Article` content type with `title`,
   `body`, and `image` fields.
2. Clear all the caches to avoid 404. `drush cc all`
3. If you are going to play with `Angularify` module just be sure to have all
   dependencies installed. Please refer to package.json dependency section.

##Dependencies

1. (Angularjs module)[https://drupal.org/project/angularjs]
2. (Libraries)[https://drupal.org/project/libraries]
3. (Views)[https://drupal.org/project/views]

