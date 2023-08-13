/*
    Project: Shinigami (https://github.com/azazelm3dj3d/shinigami-ts)
    Authors: azazelm3dj3d (https://github.com/azazelm3dj3d)
    License: BSD 2-Clause
*/

import * as fetch from "node-fetch"
import * as fs from "fs"

export const shinigami = (lang_os: string, version: string) => {
    try {
        fetch(
            `https://raw.githubusercontent.com/azazelm3dj3d/DockDB/main/Docker/${lang_os}/${version}/Dockerfile`
        ).then(async (res: { text: () => any }) =>
            fs.writeFile("Dockerfile", await res.text(), function (err: any) {
                if (err) {
                    throw err
                }
            })
        )
    } catch (e: any) {
        console.log(e)
    }
}
