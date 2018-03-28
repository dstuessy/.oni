
import * as React from "/opt/Oni/resources/app/node_modules/react"
import * as Oni from "/opt/Oni/resources/app/node_modules/oni-api"

export const activate = (oni: Oni.Plugin.Api) => {
    console.log("config activated")

    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", () => console.log("Control+Enter was pressed"))

    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")

}

export const deactivate = (oni: Oni.Plugin.Api) => {
    console.log("config deactivated")
}

export const configuration = {
    //add custom config here, such as

    "vim.setting.relativenumber": true,
    "vim.setting.number": true,

    "ui.colorscheme": "onedark",

    //"oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents"],
    //"oni.loadInitVim": false,
    "editor.fontSize": "16px",
    "editor.fontFamily": "Inconsolata",

    // UI customizations
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",
}
