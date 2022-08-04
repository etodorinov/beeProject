const errorMapper = (error) => {
  if (error.errors) {
    return Object.entries(error.errors)
      .map(([key, value]) => value.message)
      .join("\n");
  }

  return error.message
};

exports.errorMapper = errorMapper;
