import {execSync} from 'child_process'

export const jsonStringToArray = (json: string): string[] => {
  return json.split(/\r?\n/).filter(Boolean).map((row: string) => JSON.parse(row))
}

export const runAndParseAsJson = (command: string): any => {
  return jsonStringToArray(execSync(command).toString())
}
