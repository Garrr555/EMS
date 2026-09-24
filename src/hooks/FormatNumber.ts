const useFormatRupiah = (value: number) => {
  return `Rp ${new Intl.NumberFormat("id-ID").format(value)}`;
};

export default useFormatRupiah;