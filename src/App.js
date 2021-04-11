import { RedocStandalone } from "redoc";
import spec from "./specs";
import "./styles.css";

export default function App() {
    const formatJsonforFE = (jsonSchema) => {
        let pathsWithFEtags = {}

        for (let path in jsonSchema.paths) {
            let innerObj = {}
            for (let pathType in jsonSchema.paths[path]) {
                let tags = jsonSchema.paths[path][pathType].tags || []
                if(/-FE/.test(tags[0]) || !tags.length) {
                    innerObj[pathType] = jsonSchema.paths[path][pathType]
                }
            }
            pathsWithFEtags[path] = innerObj
        }

        let pathsWithFEtagsAndNonEmptyValues = {}

        for (let path in pathsWithFEtags ) {
            if(Object.keys(pathsWithFEtags[path]).length) {
                pathsWithFEtagsAndNonEmptyValues[path] = pathsWithFEtags[path]
            }
        }		

        jsonSchema.paths = pathsWithFEtagsAndNonEmptyValues
        return jsonSchema
    }

    return (
        <div className="App">
        <RedocStandalone
            spec={formatJsonforFE(spec)}
            options={{
            nativeScrollbars: true,
            hideDownloadButton: true,
            theme: { colors: { primary: { main: "#B0171F" } } }
            }}
        />
        </div>
    );
}
