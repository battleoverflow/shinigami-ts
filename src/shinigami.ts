/*
    Project: Shinigami (https://github.com/battleoverflow/shinigami-ts)
    Authors: battleoverflow (https://github.com/battleoverflow)
    License: BSD 2-Clause
*/

import * as fetch from "node-fetch"
import * as fs from "fs"

export const shinigami = (lang_os: string, version: string) => {
    try {
        fetch(
            `https://raw.githubusercontent.com/battleoverflow/DockDB/main/Docker/${lang_os}/${version}/Dockerfile`
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
