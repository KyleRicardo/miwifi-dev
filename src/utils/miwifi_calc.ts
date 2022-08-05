import { Md5 } from "ts-md5/dist/md5";

const r1d_salt = "A2E371B0-B34B-48A5-8C40-A7133F3B5D88";
// Salt must be reversed for non-R1D devices
const others_salt = "d44fb0960aa0-a5e6-4a30-250f-6d2df50a";
const others_salt_rev = others_salt.split("-").reverse().join("-");
export function calc(sn: string): string {
  return Md5.hashStr(
    sn + (sn.indexOf("/") > 0 ? others_salt_rev : r1d_salt)
  ).substring(0, 8);
}
