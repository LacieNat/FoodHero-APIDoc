define({ "api": [
  {
    "type": "post",
    "url": "/loginGG",
    "title": "",
    "name": "Login_Google",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>token email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the password for the google login is set as the access token granted by Google</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>auth token</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "mealsSaved",
            "description": "<p>mealsShared</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "foodhero-server/app.js",
    "groupTitle": "Login"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/read.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_read_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/read.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_read_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/types/json.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_json_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/types/json.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_json_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/types/raw.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_raw_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/types/text.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_text_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/types/text.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/node.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/node.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/node.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/body-parser/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_body_parser_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-generator/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_generator_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express-jwt/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_jwt_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/express.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_express_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_express_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/middleware/init.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_middleware_init_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_middleware_init_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/middleware/query.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_middleware_query_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_middleware_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/router/layer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/router/layer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/router/layer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/router/route.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_router_route_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_router_route_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/content-disposition/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_content_disposition_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/cookie-signature/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_cookie_signature_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/cookie-signature/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_cookie_signature_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/browser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/debug.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/node.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/node.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/node.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/debug/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_debug_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/etag/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_etag_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/fresh/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_fresh_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_fresh_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/parseurl/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_parseurl_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_parseurl_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/parseurl/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_parseurl_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_parseurl_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/parseurl/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_parseurl_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_parseurl_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/parseurl/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_parseurl_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_parseurl_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/path-to-regexp/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_path_to_regexp_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_path_to_regexp_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/proxy-addr/node_modules/forwarded/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_node_modules_forwarded_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_proxy_addr_node_modules_forwarded_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/send/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_send_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/serve-static/node_modules/send/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_serve_static_node_modules_send_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/type-is/node_modules/media-typer/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_type_is_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/utils-merge/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_utils_merge_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_utils_merge_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/vary/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_vary_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_vary_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/vary/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_vary_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_vary_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/express/node_modules/vary/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_vary_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_express_node_modules_vary_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/jade.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/compiler.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/lexer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/lexer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/lexer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/lexer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/lexer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/lexer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/lexer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/lexer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/lexer.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/attrs.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_attrs_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_attrs_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/attrs.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_attrs_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_attrs_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/attrs.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_attrs_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_attrs_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/attrs.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_attrs_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_attrs_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/block-comment.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_comment_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_comment_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/block.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/block.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/block.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/block.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/block.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/block.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/block.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/case.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_case_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_case_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/code.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_code_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_code_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/comment.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_comment_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_comment_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/doctype.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_doctype_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_doctype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/each.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_each_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_each_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/filter.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_filter_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_filter_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/literal.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_literal_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_literal_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/mixin-block.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_mixin_block_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_mixin_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/mixin.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_mixin_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_mixin_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/node.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_node_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/tag.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_tag_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_tag_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/tag.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_tag_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_tag_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/tag.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_tag_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_tag_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/tag.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_tag_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_tag_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/nodes/text.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_text_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_nodes_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/parser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/parser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/parser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/parser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/parser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/parser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/parser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/parser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/parser.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/runtime.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_runtime_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/runtime.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_runtime_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/runtime.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_runtime_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/runtime.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_runtime_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/lib/utils.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_lib_utils_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_lib_utils_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/commander/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/transformers/node_modules/css/node_modules/css-stringify/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_transformers_node_modules_css_node_modules_css_stringify_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_transformers_node_modules_css_node_modules_css_stringify_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/uglify-js/node_modules/yargs/node_modules/cliui/node_modules/center-align/node_modules/align-text/node_modules/repeat-string/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_uglify_js_node_modules_yargs_node_modules_cliui_node_modules_center_align_node_modules_align_text_node_modules_repeat_string_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_uglify_js_node_modules_yargs_node_modules_cliui_node_modules_center_align_node_modules_align_text_node_modules_repeat_string_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/uglify-js/node_modules/yargs/node_modules/cliui/node_modules/center-align/node_modules/lazy-cache/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_uglify_js_node_modules_yargs_node_modules_cliui_node_modules_center_align_node_modules_lazy_cache_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_uglify_js_node_modules_yargs_node_modules_cliui_node_modules_center_align_node_modules_lazy_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/node_modules/uglify-js/node_modules/yargs/node_modules/cliui/node_modules/right-align/node_modules/align-text/node_modules/repeat-string/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_uglify_js_node_modules_yargs_node_modules_cliui_node_modules_right_align_node_modules_align_text_node_modules_repeat_string_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_node_modules_uglify_js_node_modules_yargs_node_modules_cliui_node_modules_right_align_node_modules_align_text_node_modules_repeat_string_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/runtime.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_runtime_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/runtime.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_runtime_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/runtime.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_runtime_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jade/runtime.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jade_runtime_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jade_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/jws/node_modules/base64url/node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_jws_node_modules_base64url_node_modules_concat_stream_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "foodhero-server/node_modules/mysql/node_modules/readable-stream/node_modules/isarray/build/build.js",
    "group": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "groupTitle": "_home_ubuntu_foodhero_server_node_modules_mysql_node_modules_readable_stream_node_modules_isarray_build_build_js",
    "name": "Public"
  }
] });
