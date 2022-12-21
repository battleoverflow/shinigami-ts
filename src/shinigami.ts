import * as fetch from "node-fetch"
import * as fs from "fs"

// TODO: Add `build: boolean` for runtime Docker builds

export const shinigami = (lang_os: string, version: string) => {
    console.log("Shinigami init")

    try {
        fetch(
            `https://raw.githubusercontent.com/shinigamilib/StoreDock/main/Docker/${lang_os}/${version}/Dockerfile`
        ).then(async (res) =>
            fs.writeFile("Dockerfile", await res.text(), function (err: any) {
                if (err) {
                    throw err
                }
            })
        )

        // if (build) {
        //     console.log("TODO: Add Docker build")
        // }
    } catch (e: any) {
        console.log(e)
    }
}
